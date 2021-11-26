import React from "react";
import {StyleSheet, View, Text, Button} from "react-native";
import { globalStyles } from "../style/global";

export default function ReviewDetails({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Review Details Screen</Text>
            <Button title="To Home" onPress={
                () => {
                    navigation.goBack()
                }
            } />
        </View>
    )
}

const styles = StyleSheet.create({
});