import React from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import {styleGameDetail} from "../style/gameDetailStyle"


const win = Dimensions.get('window');


export default class GameDetailScreen extends React.Component {
    constructor(props) {
        super(props);
        this.gameName = this.props.navigation.state.params.name;
        this.gameSlug = this.props.navigation.state.params.slug;
        this.state = {info: {}, ratio: 16 / 9}
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('name', 'Details Jeux'),
        };
    };

    componentDidMount() {
        this.getGameInfoFromApi();
    }

    getGameInfoFromApi() {
        try {
            let slug = this.gameSlug;
            fetch(
                'https://api.rawg.io/api/games/' + slug, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                })
                .then((res) => res.json()
                    .then((json) => {
                        this.setState({info: json});
                    })
                );
        } catch (error) {
            console.error(error);
        }
    }

    ajout (){
        alert("Jeux ajouter a la liste");
    }

    render() {
        let data = this.state.info;
        Image.getSize(data.background_image, (width, height) => {
            this.setState({ratio: width / height});
        });
        return (
            <View>
                <Image
                    source={{uri: data.background_image}}
                    style={
                        {
                            width: '100%',
                        }}
                    aspectRatio={this.state.ratio}/>
                <TouchableOpacity
                    onPress={() => this.ajout()}
                    style={
                        {
                            flex: 0,
                            padding: 10,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderBottomWidth: 1.5,
                            borderBottomColor: 'crimson'
                        }
                    }
                >
                    <Text
                        style={{
                            color:'crimson',
                            textAlign: 'center',
                            width: '100%',
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}
                    >Ajouter</Text>
                </TouchableOpacity>
                <Text>{data.name}</Text>
                <Text>{data.description_raw}</Text>
                <Text>{data.released}</Text>
                {/*<View>*/}
                {/*{*/}
                {/*data.platforms.map((platform) => {*/}
                {/*return (*/}
                {/*<Text>{platform.platform.name}</Text>*/}
                {/*)*/}
                {/*})*/}
                {/*}*/}
                {/*</View>*/}
                <Text>{data.metacritic}</Text>
            </View>
        );
    }
}
