import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import CameraScreen from '../screens/User/CameraScreen'
import AddPostNavigator from './AddPostNavigator'
import FeedNavigator from './FeedNavigator'
import UserNavigator from './UserNavigator'
import customOptions from '../constants/navOptions'
import colors from '../constants/colors'
import { createStackNavigator } from '@react-navigation/stack'

const Tab = createBottomTabNavigator()
const Main = createStackNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={{ FeedNavigator }}
      tabBarOptions={{
        activeTintColor: colors.tabTextActive,
        activeBackgroundColor: '#222',
        inactiveTintColor: '#999',
        inactiveBackgroundColor: 'black',
        labelStyle: { fontSize: 13 },
        tabStyle: { paddingVertical: 4 },
        style: { height: 55 }
      }}
    >
      <Tab.Screen
        name='FeedNavigator'
        component={FeedNavigator}
        options={{
          ...customOptions,
          title: 'Memes',
          tabBarIcon: ({ color }) => {
            return <Ionicons name='md-albums' size={23} color={color} />
          }
        }}
      />
      <Tab.Screen
        name='AddPostNavigator'
        component={AddPostNavigator}
        options={{
          ...customOptions,
          title: 'Add meme',
          tabBarIcon: ({ color }) => {
            return <Ionicons name='md-add-circle-outline' size={30} color={color} />
          }
        }}
      />
      <Tab.Screen
        name='UserNavigator'
        component={UserNavigator}
        options={{
          ...customOptions,
          title: 'Profile',
          tabBarIcon: ({ color }) => {
            return <Ionicons name='md-person' size={25} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

const MainNavigator = () => {
  return (
    <Main.Navigator
      initialRouteName='TabNavigator'
    >
      <Main.Screen
        name='TabNavigator'
        component={TabNavigator}
        options={customOptions}
      />
      <Main.Screen
        name='Camera'
        component={CameraScreen}
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
export default MainNavigatorContainer