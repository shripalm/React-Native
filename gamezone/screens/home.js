import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../style/global";

export default function Home({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title="To Review" onPress={
                () => {
                    navigation.navigate('Review Details')
                }
            } />
        </View>
    )
}

const styles = StyleSheet.create({
});