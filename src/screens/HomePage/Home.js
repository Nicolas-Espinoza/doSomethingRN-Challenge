import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles'

import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/actions/taskAction'


import Toast from 'react-native-toast-message'

import axios from 'axios'

const Home = (props) => {
  const { age, name } = props.route.params

  //redux
  const dispatch = useDispatch()

  const [randomActivity, setRandomActivity] = React.useState({
    activity: '',
    participants: '',
    type: ''
  })

  const [user, setUser] = React.useState({
    name: '',
    age: '',
    task: []
  })

  React.useEffect(() => {
    setUser({
      name,
      age,
      task: []
    })
    fetchingActivity()
  }, [])

  const fetchingActivity = async () => {
    const { data } = await axios.get('http://www.boredapi.com/api/activity')
    setRandomActivity(data)
  }

  const addToList = (activity) => {
    dispatch(addTask(activity))
    Toast.show({
      type: 'success',
      text1: 'Task added successfully',
      text2: `${activity.activity}`
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome </Text>
        <Text style={styles.title}>{user.name}</Text>
        <Text style={styles.subtitle}>Age: {user.age}</Text>
      </View>
      <View style={styles.task}>
        <Text style={styles.boxTitle}>Title:</Text>
        <Text style={styles.text}>{randomActivity.activity}</Text>
        <Text style={styles.boxTitle}>Participants:</Text>
        <Text style={styles.text}>{randomActivity.participants}</Text>
        <Text style={styles.boxTitle}>Type:</Text>
        <Text style={styles.text}>{randomActivity.type}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={fetchingActivity}>
          <Text style={styles.buttonText}>Refresh</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => addToList(randomActivity)}>
          <Text style={styles.buttonText}>Add to List</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.largeButton} onPress={() => props.navigation.navigate('Activities', user)}>
          <Text style={styles.buttonText}>Activities To Do!</Text>
        </TouchableOpacity>
      </View>
      <Toast />
    </View>
  )
}



export default Home