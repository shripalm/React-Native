import { createStackNavigator } from 'react-navigation-stack';
import Header from '../shared/Header';
import React from 'react';
import Completed from '../screen/Completed';

const screens = {
    "About": {
        screen: Completed,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title="Completed Task" navigation={navigation} />
            }
        }
    }
}

const CompletedStack = createStackNavigator(screens)

export default CompletedStack;