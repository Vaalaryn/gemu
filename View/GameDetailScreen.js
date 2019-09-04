import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {styles} from "../style/globalStyle"



export default class GameDetailScreen extends React.Component {
    constructor(props) {
        super(props);
        this.gameName = this.props.navigation.state.params.name;
        this.gameSlug = this.props.navigation.state.params.slug;
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name', 'A Nested Details Screen'),
        };
    };

    componentDidMount() {
        this.getGameInfoFromApi();
    }

    getGameInfoFromApi() {
        try {
            let slug = this.gameSlug;
            fetch(
                'https://api.rawg.io/api/games/' + slug , {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                })
                .then((res) => res.json()
                    .then((json) => {
                        // this.setState({datas: json});
                        console.log(json);
                    })
                );
        } catch
            (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.gameSlug}</Text>
            </View>
        );
    }
}
