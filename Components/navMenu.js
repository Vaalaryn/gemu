import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {stylesNavMenu} from '../style/navMenuStyle'

f = () => {
    alert("coucou");
};

export default class NavMenu extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={stylesNavMenu.navBar}>
                <TouchableOpacity
                    onPress={f}
                    style={stylesNavMenu.button}>
                    <Text style={stylesNavMenu.buttonText}>Liste</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={f}
                    style={stylesNavMenu.button}>
                    <Text style={stylesNavMenu.buttonText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={f}
                    style={stylesNavMenu.button}>
                    <Text style={stylesNavMenu.buttonText}>Profil</Text>
                </TouchableOpacity>
            </View>
        )

    }
}