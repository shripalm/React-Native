import React from 'react';
import { TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import Header from './Header';
import Add from './screen/Add';
import Completed from './screen/Completed';

export default function App() {

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <>
        <Header title="TODO APP" />
        <Add />
        <Text style={{
          textAlign: 'justify',
          paddingHorizontal: 30
        }}>
          UPDATE ME: (I) Notification System (II) Completion Time (III) Priority, Categeory (IV) Clear All, Complete All (V) UI Modifications, Animation on screen switchings (VI) Machine learning prediction that in how much time the tasks will gonna complete will shown at adding that task's time.
        </Text>
      </>
    </TouchableWithoutFeedback>
  );
}