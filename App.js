import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {styles} from "./style/globalStyle"
import NavMenu  from "./Components/navMenu"
import ListeView from "./Components/ListeView";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <ListeView/>
      </View>
      <NavMenu style={styles.navbar}/>
    </View>
  );
}
