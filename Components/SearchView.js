import React from 'react';
import { View, Button } from 'react-native';
import { SearchBar, CheckBox } from 'react-native-elements';

export default class SearchView extends React.Component {
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
                    placeholder='Rechercher'
                    onChangeText={this.updateSearch}
                    value={search}/>
            </View>

        )
    };
}
