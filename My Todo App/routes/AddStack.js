import { createStackNavigator } from 'react-navigation-stack';
import Header from '../shared/Header';
import React from 'react';
import Add from '../screen/Add';

const screens = {
    "add": {
        screen: Add,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title="Add Task" navigation={navigation} />
            }
        }
    }
}

const AddStack = createStackNavigator(screens)

export default AddStack;