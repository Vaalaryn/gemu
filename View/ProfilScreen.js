import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {styles} from "../style/globalStyle"
import NavMenu from "../Components/navMenu"
import ListeView from "../Components/ListeView";
import {stylesNavMenu} from "../style/navMenuStyle";


export default class ProfilScreen extends React.Component {
    constructor() {
        super();
    }

    static navigationOptions = {
        header: null,
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.statusBar}/>
                <View style={styles.view}>
                    {/*<ListeView nav={navigate}/>*/}
                </View>
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
                        onPress={() => navigate('Profile')}
                        style={stylesNavMenu.button}>
                        <Text style={stylesNavMenu.buttonText}>Profil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
