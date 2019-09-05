import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {styleListeView} from '../style/styleListeView';
import SearchView from './SearchView';

export default class ListeView extends React.Component {

    constructor(props) {
        super(props);
        this.data = [
            {
                name: "Grand Theft Auto V",
                platform: "PS4",
                release: "2013-09-17",
                status: "Fini",
                slug: "grand-theft-auto-v",
                background_image: "https://media.rawg.io/media/games/978/9780426199d92d086e7c85ed8993cede.jpg"
            },
            {
                name: "The Witcher 3",
                platform: "PS4",
                release: "2016-05-24",
                status: "En cours",
                slug: "the_witcher_3",
                background_image: "https://media.rawg.io/media/games/088/088b41ca3f9d22163e43be07acf42304.jpg"
            },
            {
                name: "Portal 2",
                platform: "PS2",
                release: "01-08-2002",
                status: "Fini",
                slug: "portal-2",
                background_image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
            },
            {
                name: "Left 4 Dead 2",
                platform: "PS3",
                release: "24-03-2001",
                status: "A faire",
                slug: "left-4-dead-2",
                background_image: "https://media.rawg.io/media/games/c25/c25ebb8eb08790277ae2e2dce0d62174.jpg"
            },
            {
                name: "The Elder Scrolls V: Skyrim",
                platform: "PS4",
                release: "05-09-2015",
                status: "Fini",
                slug: "the-elder-scrolls-v-skyrim",
                background_image: "https://media.rawg.io/media/games/148/1485f72434101885b098d4290bf0ba67.jpg"
            },
            {
                name: "God of War",
                platform: "PSP",
                release: "15-06-2012",
                status: "A faire",
                slug: "god_of_war",
                background_image: "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
            },
            {
                name: "Life is Strange",
                platform: "Nintendo DS",
                release: "11-04-2010",
                status: "Fini",
                slug: "life-is-strange-episode-1-2",
                background_image: "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
            },
            {
                name: "Borderlands 2",
                platform: "Nintendo Switch",
                release: "20-02-2018",
                status: "En cours",
                slug: "borderlands-2",
                background_image: "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
            },
            {
                name: "Doom",
                platform: "PC",
                release: "25-08-2018",
                status: "Fini",
                slug: "doom",
                background_image: "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
            },
            {
                name: "Counter-Strike: Global Offensive",
                platform: "PS4",
                release: "16-05-2019",
                status: "En cours",
                slug: "counter-strike-global-offensive",
                background_image: "https://media.rawg.io/media/games/ded/dedd631793c5666ffab9ef03975eb226.jpg"
            },
            {
                name: "BioShock Infinite",
                platform: "PS4",
                release: "25-08-2019",
                status: "Fini",
                slug: "bioshock-infinite",
                background_image: "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
            },
            {
                name: "Tomb Raider (2013)",
                platform: "PS4",
                release: "26-06-2013",
                status: "En cours",
                slug: "tomb-raider",
                background_image: "https://media.rawg.io/media/games/81b/81b138691f027ed1f8720758daa0d895.jpg"
            }

        ]
    }

    componentDidMount() {

    }

    render() {
        const navigate = this.props.nav;
        return (
            <View>
                <ScrollView style={styleListeView.listContainer}>
                    {this.data.map((data) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigate('Game', {name: data.name, slug: data.slug})}
                                key={data.slug}
                                style={styleListeView.listElement}>
                                <Image
                                    source={{uri: data.background_image}}
                                    style={
                                        {
                                            width: '100%',
                                        }}
                                    aspectRatio={16/9}/>
                                <Text style={styleListeView.name}>{data.name}</Text>
                                <Text>{data.platform}</Text>
                                <Text>{data.release}</Text>
                                <Text>{data.status}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        )
    };
}
