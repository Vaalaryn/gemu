import React from 'react';
import { View } from 'react-native';
import {styles} from "./style/globalStyle"
import NavMenu  from "./Components/navMenu"
import SearchView from './Components/SearchView'

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.view}>
            <SearchView />
        </View>
        <NavMenu/>
    </View>
  );
}
