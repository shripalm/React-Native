import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { styles } from '../style/Global';
import { Cache } from '../storage/Cache';

export default function Add() {
    const [textValue, setTextValue] = useState('')

    const addList = async () => {
        
        if (textValue.trim().length === 0) {
            alert('You cannot add empty value..!');
            return;
        }
        
        let todoList = [];
        
        async function getOldData() {
            await Cache.getItem('myTodoList').then((response) => {
                if (response.length !== 0) todoList = response
            })
        }
        await getOldData()

        let date = new Date();
        todoList.unshift({
            "todo": textValue.trim(),
            "addedAt": date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes(),
            "completedAt": ""
        })

        setTextValue('')
        setNewData(todoList)
    }

    async function setNewData(data) {
        await Cache.setItem('myTodoList', data)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setTextValue}
                value={textValue}
                placeholder="Enter Event"
            />
            <TouchableOpacity style={styles.button} onPress={addList}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}
