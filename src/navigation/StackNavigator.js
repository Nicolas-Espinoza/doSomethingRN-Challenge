import React from "react";
import { createStackNavigator } from '@react-navigation/stack'


import Login from '../screens/Login/Login'
import SignUp from '../screens/SignUp/SignUp'
import Home from '../screens/HomePage/Home'
import ActivitiesToDo from '../screens/ActivitiesToDo/ActivitiesToDo'

const Stack = createStackNavigator()

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='Activities' component={ActivitiesToDo} />
    </Stack.Navigator>
  )
}