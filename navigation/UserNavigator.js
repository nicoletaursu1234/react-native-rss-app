import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ProfileScreen from '../screens/User/ProfileScreen'
import customOptions from '../constants/navOptions'

const User = createStackNavigator()

const UserNavigator = () => {
  return (
    <User.Navigator>
      <User.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{ ...customOptions, title: 'Profile' }}
      />
    </User.Navigator>
  )
}

export default UserNavigator