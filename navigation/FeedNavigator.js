import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainFeedScreen from '../screens/Gallery/MainFeedScreen';
import ViewPhotoScreen from '../screens/Gallery/ViewPhotoScreen';
import customOptions from '../constants/navOptions'

const Feed = createStackNavigator()

const FeedNavigator = () => {
  return (
    <Feed.Navigator
      initialRouteName="MainFeedScreen"
      screenOptions={{ gestureEnabled: true }}
    >
      <Feed.Screen
        name='MainFeedScreen'
        component={MainFeedScreen}
        options={{ ...customOptions}}
      />
      <Feed.Screen
        name='ViewPhotoScreen'
        component={ViewPhotoScreen}
        options={{ ...customOptions}}
      />
    </Feed.Navigator>
  )
}

export default FeedNavigator