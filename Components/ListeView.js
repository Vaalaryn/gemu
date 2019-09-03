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
                'https://api.rawg.io/api/games?page_size=10', {
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
            <View>
                <ScrollView style={styleListeView.listContainer}>
                    {this.state.datas.map((data) => {
                        return (<Text>{data.id} - {data.name}</Text>)
                    })}
                </ScrollView>
                <Button
                    title="Learn More"
                    onPress={() => this.getGameFromApi}
                />
            </View>
        )
    };
}