import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, Button} from 'react-native';
import {styleListeView} from '../style/styleListeView';
import SearchView from './SearchView';

export default class ListeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {datas: []}
    }

    componentDidMount() {
        this.getGameFromApi();
    }


    getGameFromApi() {
        try {
            fetch(
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
        const navigate = this.props.nav;
        return (
            <View>
                <SearchView/>
                <ScrollView style={styleListeView.listContainer}>
                    {this.state.datas.map((data) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigate('Game', {name: data.name, slug: data.slug})}
                                key={data.id}
                                style={styleListeView.listElement}>
                                <Text>{data.name}</Text>
                                <Text>{data.metacritic}</Text>
                                <Text>Status</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        )
    };
}