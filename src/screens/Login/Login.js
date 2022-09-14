import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, TouchableHighlight } from "react-native";
import { styles } from './styles'

import AsyncStorage from "@react-native-async-storage/async-storage";

import * as Animated from 'react-native-animatable'

import Toast from 'react-native-toast-message'


const Login = (props) => {

  const [toogle, setToogle] = React.useState(false)

  const [credentials, setcredentials] = React.useState({
    password: '',
    email: ''
  })

  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    //AsyncStorage.removeItem('users')
    props.navigation.addListener('focus', async () => {
      try {
        const JSONvalue = await AsyncStorage.getItem('users')
        if (JSONvalue == null) {
          Alert.alert('No users found!', 'No users found in this device, please create one!', [
            {
              text: 'Ok',
              style: 'cancel'
            }
          ])
        } else {
          setUsers(JSON.parse(JSONvalue))
        }
      } catch (error) {
        console.log('error login', error)
      }
    })

  }, [])

  const goSignUp = () => {
    props.navigation.navigate('SignUp')
  }


  const loginUser = async (credentials) => {

    const { email, password } = credentials
    const data = await AsyncStorage.getItem('users')
    setUsers(JSON.parse(data))

    const loginUser = users.find((user) => {
      if (user.password === password
        && user.email.trim().toLowerCase() === email.trim().toLowerCase()) {
        return user
      }
    })

    if (loginUser) {
      Toast.show({
        type: 'success',
        text1: 'Successfully Logged in!',
        text2: `Welcome ${loginUser.name}!`
      })
      setTimeout(() => {
        props.navigation.navigate('Home', loginUser)
      }, 1800)
    } else {
      Toast.show({
        type: 'error',
        text1: 'Email or password incorrect!',
        text2: 'Please verify your credentials!'
      })
    }
  }
  return (
    <View style={styles.container}>
      <Animated.Text
        animation='zoomIn'
        style={styles.title}
        iterationCount={1}
      >
        Do Something!
      </Animated.Text>

      <View>
        <TextInput
          style={styles.input}
          placeholder='email'
          autoComplete='off'
          onChangeText={(email) => setcredentials({ ...credentials, email })}
        />

        <View style={styles.showPassword}>
          <TextInput
            style={styles.input}
            placeholder='password'
            autoComplete='off'
            onChangeText={(password) => setcredentials({ ...credentials, password })}
            secureTextEntry={!toogle}
          />
          <TouchableOpacity style={styles.show} onPress={() => setToogle(!toogle)}>
            {
              toogle ? <Text>hide</Text> : <Text>show</Text>
            }
          </TouchableOpacity>
        </View>
      </View>

      <TouchableHighlight underlayColor={'#7fda89'} style={styles.loginButton} onPress={() => loginUser(credentials)}>
        <Text>Login</Text>
      </TouchableHighlight>

      <View style={styles.footer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => goSignUp()}>
          <Text style={styles.createOneTitle}>Create one!</Text>
        </TouchableOpacity>
      </View>
      <Toast />
    </View>
  )
}


export default Login