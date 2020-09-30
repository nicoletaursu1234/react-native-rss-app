import React from 'react'
import customOptions from '../constants/navOptions'
import AddPostScreen from '../screens/Gallery/AddPostScreen'
import AddEventScreen from '../screens/Gallery/AddEventScreen'

import { createStackNavigator } from '@react-navigation/stack'

const AddPost = createStackNavigator()

const AddPostNavigator = () => {
  return (
    <AddPost.Navigator>
      <AddPost.Screen
        name="AddPostScreen"
        component={AddPostScreen}
        options={{ ...customOptions, title: 'Add post' }}
      />
      <AddPost.Screen
        name="AddDateEvent"
        component={AddEventScreen}
        options={{ ...customOptions, title: 'Add Day Event' }}
      />
    </AddPost.Navigator>
  )
}

export default AddPostNavigator