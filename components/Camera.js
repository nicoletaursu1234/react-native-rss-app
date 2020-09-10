import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Camera } from 'expo-camera'

const CameraComponent = (props) => {
  props.navigation.setOptions({
    headerShown: false,
    tabBarVisible: false
  })

  const [hasPermission, setHasPermission] = useState(false)
  const [type, setType] = useState(Camera.Constants.Type.back)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted')
    })();
  }, [hasPermission]);
  console.log(hasPermission)

  if (hasPermission === null) {
    console.log('is null')
    return <Text>Idk what is happening</Text>;
  } else if (hasPermission === false) {
    console.log('is null')
    return <Text>No access to camera</Text>;
  }
  
    return (
        <View style={{height: '100%'}}>
          <Camera style={{ flex: 1 }} type={type} />
      </View>
    );
}

export default CameraComponent