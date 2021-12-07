import { createStackNavigator } from 'react-navigation-stack';
import Header from '../shared/Header';
import React from 'react';
import About from '../screen/About';

const screens = {
    "About": {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title="About Us" navigation={navigation} />
            }
        }
    }
}

const AboutStack = createStackNavigator(screens)

export default AboutStack;