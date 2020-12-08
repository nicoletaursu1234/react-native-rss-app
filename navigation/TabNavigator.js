import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import FeedNavigator from './FeedNavigator'
import AddPostNavigator from './AddPostNavigator'
import UserNavigator from './UserNavigator'
import customOptions from '../constants/navOptions'
import colors from '../constants/colors'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
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
          title: 'Photos',
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
          title: 'Add event',
          
          tabBarIcon: ({ color }) => {
            return <Ionicons name='md-add-circle-outline' size={30} color={color} />
          }
        }}
      />
      <Tab.Screen
        name='UserNavigator'
        component={UserNavigator}
        initialParams={{photo: null}}
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

export default TabNavigator
