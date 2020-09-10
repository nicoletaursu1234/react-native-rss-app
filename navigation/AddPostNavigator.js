import React from 'react'
import AddPostScreen from '../screens/Gallery/AddPostScreen'
import customOptions from '../constants/navOptions'

import { createStackNavigator } from '@react-navigation/stack'

const AddPost = createStackNavigator()

const AddPostNavigator = () => {
  return (
    <AddPost.Navigator>
      <AddPost.Screen
        name="AddpostScreen"
        component={AddPostScreen}
        options={{ ...customOptions, title: 'Add meme' }}
      />
    </AddPost.Navigator>
  )
}

export default AddPostNavigator