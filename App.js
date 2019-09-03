import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {styles} from "./style/globalStyle"
import NavMenu  from "./Components/navMenu"

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>

      </ScrollView>
      <NavMenu/>
    </View>
  );
}
