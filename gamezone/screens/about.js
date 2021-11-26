import React from "react";
import {StyleSheet, View, Text} from "react-native";
import { globalStyles } from "../style/global";

export default function About(){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
});