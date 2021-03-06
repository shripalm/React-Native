import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';
import { globalStyles } from '../style/global';

const screens = {
    "Home": {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title="Game Zone" navigation={navigation} />
            }
        }
    },
    "Review Details": {
        screen: ReviewDetails
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: globalStyles.defaultNavigationOptions
})

export default HomeStack;