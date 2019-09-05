import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, Button} from 'react-native';
import {styleListeView} from '../style/styleListeView';
import {SearchBar} from "react-native-elements";
import {SearchViewStyle} from "../style/searchViewStyle";

export default class SearchView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            search: '',
            timeout: null,
        };
    }

    componentDidMount() {
        this.getGameFromApi();
    }

    updateSearch = (search) => {
        this.setState({search});
        if (this.state.timeout !== null) {
            clearTimeout(this.state.timeout);
            this.setState({timeout: null});
        }
        this.state.timeout = setTimeout(() => {
            this.getGameFromApi()
        }, 750)
    };

    getGameFromApi() {
        let url = 'https://api.rawg.io/api/games?page_size=20';
        if (this.state.search !== '') {
            url = url + '&search=' + this.state.search;
        }
        try {
            fetch(url, {
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
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const navigate = this.props.nav;
        const { search } = this.state.search;
        console.log(search);
        return (
            <View>
                <View>
                    <SearchBar
                        lightTheme
                        platform="android"
                        style={SearchViewStyle.searchBar}
                        placeholder='Rechercher'
                        onChangeText={this.updateSearch}
                        value={ search }/>
                </View>
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
    }
    ;
}