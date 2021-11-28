import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from "../style/global";

export default function Header({ title, navigation }) {

    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" size={28} onPress={() => { navigation.openDrawer() }} style={styles.icon} />
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(globalStyles.headerDrawerCustoms)