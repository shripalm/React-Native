import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../style/Global';
import { MaterialIcons } from '@expo/vector-icons';
import { Cache } from '../storage/Cache';


export default function Remaining() {

  const [todoList, setTodoList] = useState([])
  const [set, setter] = useState(0)

  function handleComplete(selectedIndex) {
    let temp = todoList
    temp[selectedIndex].status = !temp[selectedIndex].status
    setTodoList(temp)
    setter(set + 1)
  }

  useEffect(() => {
    async function getOldData() {
      await Cache.getItem('myTodoList').then((response) => {
        if (response.length !== 0) {
          setTodoList(response)
        }
      })
    }
    getOldData()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        style={{
          width: '100%'
        }}
        numColumns={1}
        keyExtractor={
          (item, index) => index.toString()
        }
        data={todoList}
        renderItem={
          ({ item, index }) => {
            return (
                <View style={{
                  width: '100%'
                }}>
                  <TouchableOpacity onPress={() => { handleComplete(index) }} style={
                    (!item.status) ?
                      styles.todoRemain : styles.todoComplete
                  }>
                    <View style={{
                      maxWidth: '80%'
                    }}>
                      <Text style={styles.todoText}>{item.todo}</Text>
                      <Text style={{ color: 'grey' }}>{item.addedAt || 'N/A'}</Text>
                    </View>
                    {
                      (!item.status) ?
                        <MaterialIcons
                          name="delete"
                          size={24}
                          color="#f00"
                          onPress={
                            () => {
                              let temp = todoList.filter((value, index2) => {
                                if (index !== index2) return value
                              })
                              setTodoList(temp)
                            }
                          }
                        /> : <></>
                    }

                  </TouchableOpacity>
                </View>
            )
          }
        }
      />

    </View>
  );
}