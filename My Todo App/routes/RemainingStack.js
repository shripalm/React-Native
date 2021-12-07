import { createStackNavigator } from 'react-navigation-stack';
import Header from '../shared/Header';
import React from 'react';
import Remaining from '../screen/Remaining';

const screens = {
    "About": {
        screen: Remaining,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title="Remaining Task" navigation={navigation} />
            }
        }
    }
}

const RemainingStack = createStackNavigator(screens)

export default RemainingStack;