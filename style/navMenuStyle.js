import {StyleSheet} from "react-native";

export const stylesNavMenu = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: '100%',
        backgroundColor: 'white',
    },navBar: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        padding: 0
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'crimson',
        width: '100%',
        textAlign: 'center'
    }
});