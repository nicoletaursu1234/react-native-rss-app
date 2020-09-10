import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Camera } from 'expo-camera'
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker'

const CameraScreen = props => {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted')
    })();
  }, [hasPermission]);

  if (hasPermission === null) {
    return <Text>Idk what is happening</Text>;
  } else if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // takePic = async () => {
  //   if (camera) {
  //     const photo = await camera.takePictureAsync()
  //     const result = photo
  //     return result
  //   }
  // }

  // pickImage = async () => {
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images
  //   })
  // }

  return (
    <View style={styles.screen}>
      <Camera
        style={styles.camera}
        type={type}
        ratio='4:2'
        ref={ref => {
          camera = ref;
        }}
      >
        <View style={styles.swap}>
          <TouchableOpacity
            onPress={() => {
              setType(type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back)
            }}>
            <MaterialIcons name="swap-horiz" size={35} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.iconRow} >
          <TouchableOpacity >
            <Entypo name="archive" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign name="smile-circle" size={60} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={40}
              color="white"
              onPress={() => { props.navigation.goBack() }}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%'
  },
  camera: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between'
  },
  swap: {
    flexDirection: 'row',
    marginTop: 20,
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 40
  },
  iconRow: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
    paddingVertical: 20
  }

})

export default CameraScreen