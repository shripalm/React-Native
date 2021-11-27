import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../style/global";

export default function ReviewDetails({ navigation }) {
    return (
        <View style={globalStyles.container}>

            <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
            <View style={globalStyles.w100}>
                <Text style={globalStyles.bodyText}>
                    From: {navigation.getParam('body')}
                </Text>
                <Text style={globalStyles.bodyText}>
                    Rating: {navigation.getParam('rating')}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
});