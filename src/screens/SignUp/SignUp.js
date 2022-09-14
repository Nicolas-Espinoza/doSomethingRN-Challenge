import React from "react";
import { View, Text, TextInput, TouchableOpacity, TouchableHighlight } from "react-native";
import { styles } from './styles'

import * as Animatable from 'react-native-animatable'

import Toast from 'react-native-toast-message'

import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUp = (props) => {

  const [toogle, setToogle] = React.useState(false)

  let users = []

  const [user, setUser] = React.useState({
    email: '',
    password: '',
    age: '',
    name: '',
    lastname: ''
  })

  const [validations, setValidations] = React.useState({
    email: false,
    password: false,
    age: false,
    name: false,
    lastname: false
  })

  const [firstTime, setFirstTime] = React.useState(true)

  const validatePassword = (password) => {

    if (password.trim().length < 4) {
      setValidations({
        ...validations,
        password: false
      })
    } else {
      setUser({ ...user, password: password.trim() })
      setValidations({
        ...validations,
        password: true
      })
    }
  }

  const validateEmail = (email) => {

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/

    if (!reg.test(email.trim())) {
      setValidations({
        ...validations,
        email: false
      })
    } else {
      setUser({ ...user, email: email.trim().toLowerCase() })
      setValidations({
        ...validations,
        email: true
      })
    }
  }

  const validateName = (name) => {

    if (name.trim().length > 0) {
      setValidations({
        ...validations,
        name: true
      })
      setUser({ ...user, name: name.trim() })
    } else {
      setValidations({
        ...validations,
        name: false
      })
    }
  }

  const createUser = async () => {

    setFirstTime(false)

    if (!validations.password || !validations.email || !validations.name) {
      Toast.show({
        type: 'error',
        text1: 'The account cannot be created!',
        text2: 'Please complete the required fields correctly!'
      })
    } else {

      Toast.show({
        type: 'success',
        text1: 'Congratulations',
        text2: 'Your account was created successfully!'
      })
      //rescatar valores anteriores
      const data = await AsyncStorage.getItem('users')
      users = JSON.parse(data)
      if (users == null) {
        users = []
        users.push(user)
        const JSONvalue = JSON.stringify(users)
        await AsyncStorage.setItem('users', JSONvalue)
      } else {
        //guardo el usuario
        users.push(user)
        const JSONvalue = JSON.stringify(users)
        await AsyncStorage.setItem('users', JSONvalue)
      }
      setTimeout(() => {
        props.navigation.navigate('Login')
      }, 1500)
    }
  }

  return (
    <View style={styles.container}>
      <Animatable.Text
        style={styles.title}
        iterationCount={1}
        animation="slideInDown"
      >
        Do Something!
      </Animatable.Text>
      <Animatable.Text
        style={styles.text}
        iterationCount={1}
        animation="slideInDown"
      >
        SignUp!
      </Animatable.Text>
      <View>
        <TextInput style={styles.input}
          placeholder="Email"
          autoComplete="off"
          onChangeText={(email) => validateEmail(email)}
        //onEndEditing={(e) => handleValidateFields(e.nativeEvent.text)}
        />

        {
          (!validations.email && !firstTime) ?
            <Animatable.View animation='bounceIn' style={styles.spacing}>
              <Text style={styles.textError}>Is an invalid email! </Text>
            </Animatable.View> :
            <View style={styles.spacing} />
        }

        <View>
          <TextInput style={styles.input}
            placeholder="Password"
            autoComplete="off"
            secureTextEntry={!toogle}
            onChangeText={(password) => validatePassword(password)}
          //onEndEditing={(e) => handleValidateFields(e.nativeEvent.text)}
          />
          <TouchableOpacity onPress={() => setToogle(!toogle)} style={styles.show}>
            {
              toogle ? <Text>hide</Text> : <Text>show</Text>
            }
          </TouchableOpacity>
        </View>
        {
          (!validations.password && !firstTime) ?
            <Animatable.View animation='bounceIn' style={styles.spacing}>
              <Text style={styles.textError}>Minimun 4 characters! </Text>
            </Animatable.View> :
            <View style={styles.spacing} />
        }

        <TextInput style={styles.input}
          placeholder="Age"
          autoComplete="off"
          keyboardType="numeric"
          onChangeText={(age) => setUser({ ...user, age })}
        //onEndEditing={(e) => handleValidateFields(e.nativeEvent.text)}
        />
        <View style={styles.spacing} />

        <TextInput style={styles.input}
          placeholder="Name"
          autoComplete="off"
          onChangeText={(name) => validateName(name)}
        //onEndEditing={(e) => handleValidateFields(e.nativeEvent.text)}
        />
        {
          (!validations.name && !firstTime) ?
            <Animatable.View animation='bounceIn' style={styles.spacing}>
              <Text style={styles.textError}>Name must not be empty! </Text>
            </Animatable.View> :
            <View style={styles.spacing} />
        }

        <TextInput style={styles.input}
          placeholder="Lastname"
          autoComplete="off"
          onChangeText={(lastname) => setUser({ ...user, lastname })}
        />
        <View style={styles.spacing} />
      </View>

      <TouchableHighlight underlayColor={'#ff6e49'} style={styles.registerButton}
        onPress={() => createUser()}
      >
        <Text style={styles.buttonText}>Register!</Text>
      </TouchableHighlight>

      <Text style={styles.footerText}>
        Already have an account? Just
      </Text>

      <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
        <Text style={styles.linkText}>Login</Text>
      </TouchableOpacity>
      <Toast />
    </View>
  )
}

export default SignUp