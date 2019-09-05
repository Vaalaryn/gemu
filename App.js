import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {fadeIn} from 'react-navigation-transitions';
import SearchScreen from "./View/SearchScreen";
import ProfilScreen from "./View/ProfilScreen";
import ListeScreen from "./View/ListeScreen";
import GameDetailScreen from "./View/GameDetailScreen";

const MainNavigator = createStackNavigator({
        Home: {screen: SearchScreen},
        Profile: {screen: ProfilScreen},
        Liste: {screen: ListeScreen},
        Game: {screen: GameDetailScreen}
    },
    {
        initialRouteName: 'Home',
        transitionConfig: () => fadeIn(150),
    }
);

const App = createAppContainer(MainNavigator);

export default App;
