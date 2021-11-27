import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    "Home": {
        screen: Home,
        navigationOptions: {
            title: 'Game Zone',
        }
    },
    "Review Details": {
        screen: ReviewDetails
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#eee',
            height: 60
        },
        headerTintColor: '#fff',
        headerTitleAlign: "center"
    }
})

export default createAppContainer(HomeStack);