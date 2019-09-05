import React from 'react';
import { View, Button } from 'react-native';
import { SearchBar, CheckBox } from 'react-native-elements';
import { SearchViewStyle } from '../style/searchViewStyle'

export default class SearchMod extends React.Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <View>
                <SearchBar
                    lightTheme
                    platform = "android"
                    style={SearchViewStyle.searchBar}
                    placeholder='Rechercher'
                    onChangeText={this.updateSearch}
                    value={search}/>
            </View>
        )
    };
}
