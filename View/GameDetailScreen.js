import React from 'react';
import {Text, ScrollView, Image, Dimensions, TouchableOpacity, AsyncStorage} from 'react-native';
import {styleGameDetail} from "../style/gameDetailStyle"

export default class GameDetailScreen extends React.Component {
    constructor(props) {
        super(props);
        this.gameName = this.props.navigation.state.params.name;
        this.gameSlug = this.props.navigation.state.params.slug;
        this.state = {
            info: {},
            ratio: 16 / 9,
            gameListed: false,
            addButton: "Ajouter",
        };
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('name', 'Details Jeux'),
        };
    };

    componentDidMount() {
        this.getGameInfoFromApi();
        setInterval(async () => {
            console.log(this.state.gameListed, this.state.addButton);
            console.log('data : ', await this.getData());
        }, 7000)
    }

    updateText() {
        if(this.state.gameListed){
            this.setState({addButton: "Retirer"});
        }else{
            this.setState({addButton: "Ajouter"});
        }
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

    async storeData(dataToStore) {
        try {
            await AsyncStorage.setItem(this.gameSlug, JSON.stringify(dataToStore))
        } catch (e) {
            console.error(e);
        }
    }

    async getData() {
        try {
            return await AsyncStorage.getItem(this.gameSlug);
        } catch (e) {
            console.error(e)
        }
    }

    async deleteData() {
        try {
            console.log("delete2");
            await AsyncStorage.removeItem(this.gameSlug);
        } catch (e) {
            console.error(e)
        }
    }

    async ajout() {
        let data = {
            gameInfo: this.state.info,
            status: ""
        };
        console.log("before", this.state.gameListed);
        if(this.state.gameListed === true){
            await this.deleteData();
            console.log("delete");
            this.setState({gameListed: false});
        }else {
            await this.storeData(data);
            console.log("store");
            this.setState({gameListed: true});
        }
        this.updateText();
        console.log(this.state.addButton);
    }

    render() {
        let data = this.state.info;
        Image.getSize(data.background_image, (width, height) => {
            this.setState({ratio: width / height});
        });
        return (
            <ScrollView>
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
                            color: 'crimson',
                            textAlign: 'center',
                            width: '100%',
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}>{this.state.addButton}</Text>
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
            </ScrollView>
        );
    }
}
