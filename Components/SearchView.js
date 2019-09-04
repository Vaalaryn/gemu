import React from 'react';
import { SearchBar, CheckBox } from 'react-native-elements';
import {searchViewStyle} from '../style/searchViewStyle';
import { View, Button } from 'react-native';

export default class App extends React.Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <View style={searchViewStyle.Button}>
                <SearchBar
                    placeholder='Rechercher'
                    onChangeText={this.updateSearch}
                    value={search}/>
                <Button
                    color="crimson"
                    title='Filtre'/>
                <CheckBox
                    title={"Année"}
                    checked={this.state.checked}/>
                <CheckBox
                    title={"Plateforme"}
                    checked={this.state.checked}/>
                <CheckBox
                    title={"Genre"}
                    checked={this.state.checked}/>
                <Button
                    color="Green"
                    title="Valider"/>
            </View>

        )
    };
}
