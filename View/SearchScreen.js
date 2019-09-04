import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, Button} from 'react-native';
import {styleListeView} from '../style/styleListeView';
import SearchMod from '../Components/SearchView';
import {styles} from "../style/globalStyle";
import ListeView from "../Components/ListeView";
import NavMenu from "../Components/navMenu";
import {stylesNavMenu} from "../style/navMenuStyle";

export default class SearchScreen extends React.Component {

    constructor() {
        super();
    }

    static navigationOptions = {
        title: 'SearchView',
        header: null,
    };

    render() {

        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.statusBar}/>
                <View style={styles.view}>
                    <ListeView/>
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