import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from "./style/globalStyle"
import NavMenu from "./Components/navMenu"
import ListeView from "./Components/ListeView";
import {stylesNavMenu} from "./style/navMenuStyle";

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {content: <ListeView/>}
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view}>
                    {this.state.content}
                </View>
                <View style={stylesNavMenu.navBar}>
                    <TouchableOpacity
                        onPress={this.navigation}
                        style={stylesNavMenu.button}>
                        <Text style={stylesNavMenu.buttonText}>Liste</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.navigation}
                        style={stylesNavMenu.button}>
                        <Text style={stylesNavMenu.buttonText}>Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.navigation}
                        style={stylesNavMenu.button}>
                        <Text style={stylesNavMenu.buttonText}>Profil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
