import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';
import { globalStyles } from '../style/global';

const screens = {
    "About": {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title="About Game Zone" navigation={navigation} />
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: globalStyles.defaultNavigationOptions
})

export default AboutStack;