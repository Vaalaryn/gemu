import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {stylesNavMenu} from '../style/navMenuStyle'

export default class NavMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const navigate = this.props.nav;
        return (
            <View style={stylesNavMenu.navBar}>
                <TouchableOpacity
                    onPress={() => navigate('Liste')}
                    style={stylesNavMenu.button}>
                    <Text style={stylesNavMenu.buttonText}>Liste</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate('Home')}
                    style={stylesNavMenu.button}>
                    <Text style={stylesNavMenu.buttonText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate('Profil')}
                    style={stylesNavMenu.button}>
                    <Text style={stylesNavMenu.buttonText}>Profil</Text>
                </TouchableOpacity>
            </View>
        )

    }
}