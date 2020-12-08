import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import TabNavigator from './TabNavigator'
import UserPhotoScreen from '../screens/User/UserPhotoScreen'
import CameraScreen from '../screens/User/CameraScreen'
import customOptions from '../constants/navOptions'

const Main = createStackNavigator()

const MainNavigator = () => {
  return (
    <Main.Navigator>
      <Main.Screen
        name='Tab Navigator'
        component={TabNavigator}
        options={({ route }) => ({
          ...customOptions,
          headerTitle: getHeaderTitle(route),
        })}
      />
      <Main.Screen
        name='Camera'
        component={CameraScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name='UserPhoto'
        component={UserPhotoScreen}
        options={{ headerShown: false }}
      />
    </Main.Navigator>
  )
}
const MainNavigatorContainer = (props) => {
  return (
    <NavigationContainer>
      <MainNavigator />
      {props.children}
    </NavigationContainer>
  )
}


const getHeaderTitle = (route) => {
  
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'FeedNavigator';

  switch (routeName) {
    case 'FeedNavigator':
      return 'Photos';
    case 'AddPostNavigator':
      return 'Add Event';
    case 'UserNavigator':
      return 'Profile';
  }
}
export default MainNavigatorContainer