import {StyleSheet, StatusBar} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view: {
        height: '89%',
        width: '100%',
        backgroundColor: 'white'
    },
    navbar: {
        height: '10%',
    },
    statusBar : {
        width: '100%',
        backgroundColor: 'white',
        height: StatusBar.currentHeight
    }
});
