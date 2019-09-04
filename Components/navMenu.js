import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {stylesNavMenu} from '../style/navMenuStyle'

export default class NavMenu extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={stylesNavMenu.navBar}>
                <TouchableOpacity
                    onPress={() => this.props.navigation('ListeView')}
                    style={stylesNavMenu.button}>
                    <Text style={stylesNavMenu.buttonText}>Liste</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation('SearchView')}
                    style={stylesNavMenu.button}>
                    <Text style={stylesNavMenu.buttonText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation('ProfilView')}
                    style={stylesNavMenu.button}>
                    <Text style={stylesNavMenu.buttonText}>Profil</Text>
                </TouchableOpacity>
            </View>
        )

    }
}