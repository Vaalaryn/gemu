import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';

export default class NavMenu extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <TouchableOpacity>
                    <Text>Liste</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Profil</Text>
                </TouchableOpacity>
            </View>
        )

    }
}