import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {styles} from "../style/globalStyle"



export default class GameDetailScreen extends React.Component {
    constructor(props) {
        super(props);
        this.gameName = this.props.navigation.state.params.name;
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name', 'A Nested Details Screen'),
        };
    };

    render() {
        console.log(this.gameName);
        return (
            <View style={styles.container}>
                <Text>{this.gameName}</Text>
            </View>
        );
    }
}
