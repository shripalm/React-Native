import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../style/Global';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title, navigation }) {

    return (
        <View style={styles.headerDrawerCustoms.header}>
            <MaterialIcons name="menu" size={28} onPress={() => { navigation.openDrawer() }} style={styles.headerDrawerCustoms.icon} />
            <View>
                <Text style={styles.headerDrawerCustoms.headerText}>{title}</Text>
            </View>
        </View>
    )
}
