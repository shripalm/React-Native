import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './style/Global';

export default function Header({title}) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
}