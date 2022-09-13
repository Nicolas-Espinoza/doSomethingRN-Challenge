import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { styles } from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { removeTask } from '../../redux/actions/taskAction'

import Toast from 'react-native-toast-message'



const ActivitiesToDo = (props) => {


  const { name } = props.route.params
  //redux
  const tasks = useSelector(state => state.task)

  const dispatch = useDispatch()


  const deleteTask = (index) => {
    dispatch(removeTask(index))
    Toast.show({
      type: 'info',
      text1: 'Task deleted successfully!',
    })
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activities To Do</Text>
      <Text style={styles.subtitle}>for {name}!</Text>
      <ScrollView contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {
          tasks.length == 0 ?
            <View style={styles.noTaskContainer}>
              <Text style={styles.titleNoTask}>You don't have any task!</Text>
            </View>
            :
            tasks.map((task) => {
              return (
                <View style={styles.card} key={task.key}>
                  <Text style={styles.text}>{task.activity}</Text>
                  <TouchableOpacity style={styles.cancel} onPress={() => deleteTask(task.key)}>
                    <Text>X</Text>
                  </TouchableOpacity>
                </View>
              )
            })
        }
      </ScrollView>
      <Toast />
    </View>
  )
}



export default ActivitiesToDo