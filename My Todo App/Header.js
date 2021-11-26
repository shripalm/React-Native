import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './Styles';

export default function Header({title}) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
}