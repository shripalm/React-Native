import React, { useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../style/global";

export default function Home({ navigation }) {

    const reviewList = [
        {
            title: 'Hakuna Matata!',
            rating: 5,
            body: 'The Lion King..!',
            key: '1'
        },
        {
            title: 'Wabba Lubba Dubdub!',
            rating: 4,
            body: 'Rick and Morty..!',
            key: '2'
        },
        {
            title: 'Aaila, Jaadu!',
            rating: 3,
            body: 'Koi Mil Gaya..!',
            key: '3'
        },
        {
            title: 'Pushpa, I hate tears!',
            rating: 4,
            body: 'Amar Prem..!',
            key: '4'
        },
        {
            title: 'Ohho!',
            rating: 5,
            body: 'Thugesh..!',
            key: '5'
        }
    ]


    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviewList}
                style={globalStyles.w100}
                renderItem={({ item }) => (
                    <TouchableOpacity style={globalStyles.w100} onPress={() => { navigation.navigate('Review Details', item) }}>
                        <Text style={globalStyles.bodyText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
});