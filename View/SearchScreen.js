import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {styles} from "../style/globalStyle"
import NavMenu from "../Components/navMenu"
import SearchView from "../Components/SearchView";


export default class SearchScreen extends React.Component {
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
                <View style={styles.statusBar}/>
                <View style={styles.view}>
                    <SearchView nav={navigate}/>
                </View>
                <NavMenu nav={navigate}/>
            </View>
        );
    }
}
