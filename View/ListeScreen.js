import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {styles} from "../style/globalStyle"
import NavMenu from "../Components/navMenu"
import ListeView from "../Components/ListeView";


export default class ListeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null,
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={false}
                    barStyle="light-content"
                    backgroundColor="red" />
                <View style={styles.statusBar}/>
                <View style={styles.view}>
                    <ListeView nav={navigate}/>
                </View>
                <NavMenu nav={navigate}/>
            </View>
        );
    }
}
