import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {styleListeView} from '../style/styleListeView';

handleProductPress = (nom) => {
    alert(nom);
};


export default class ListeView extends React.Component {

    constructor() {
        super();
        this.data = this.getGameFromApi();
    }

    async componentDidMount() {
        this.data = await this.getGameFromApi();
        console.log(this.data);
    }


    getGameFromApi() {
        try {
            let response = fetch(
                'https://api.rawg.io/api/games?page_size=5', {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                }).then((res) => {
                    res.json().then((json)=>{
                        console.log(json);
                    });
                }
            );
        } catch
            (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <ScrollView style={styleListeView.listContainer}>
                {/*{*/}
                {/*    this.data.map(*/}
                {/*        (data) => {*/}
                {/*            return (*/}
                {/*                <TouchableOpacity onPress={() => handleProductPress(data.nom)}>*/}
                {/*                    <Text>{data.nom}</Text>*/}
                {/*                    <Text>{data.platform}</Text>*/}
                {/*                    <Text>{data.status}</Text>*/}
                {/*                </TouchableOpacity>*/}
                {/*            )*/}
                {/*        }*/}
                {/*    )*/}

                {/*}*/}
            </ScrollView>
        )
    }
    ;
}