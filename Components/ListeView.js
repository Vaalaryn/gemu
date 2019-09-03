import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, Button} from 'react-native';
import {styleListeView} from '../style/styleListeView';

handleProductPress = (nom) => {
    alert(nom);
};


export default class ListeView extends React.Component {

    constructor() {
        super();
        this.state = {datas: []}
    }

    componentDidMount() {
        this.getGameFromApi();
    }


    getGameFromApi() {
        try {
            fetch(
                // 'https://jsonplaceholder.typicode.com/todos', {
                'https://api.rawg.io/api/games?page_size=51', {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                })
                .then((res) => res.json()
                    .then((json) => {
                        this.setState({datas: json.results});
                    })
                );
        } catch
            (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <ScrollView style={styleListeView.listContainer}>
                {this.state.datas.map((data) => {
                    return (
                        <View key={data.id} style={styleListeView.listElement}>
                            <Text>{data.name}</Text>
                            <Text>{data.metacritic}</Text>
                            <Text>Status</Text>
                        </View>
                    )
                })}
            </ScrollView>
        )
    };
}