import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Camera } from 'expo-camera'
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'

const CameraScreen = props => {

  const [hasPermission, setHasPermission] = useState(null)
  const [cameraRef, setCameraRef] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)
  const [photo, setPhoto] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted')
    })();
  }, [hasPermission]);

  if (hasPermission === null) {
    return <View />
  } else if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePic = async () => {
    if (cameraRef) {
      await cameraRef.takePictureAsync({ onPictureSaved: onPictureSaved })
    }
  }

  const onPictureSaved = async (image) => {
    console.log(image)
    const photo = image.uri
    const fileName = photo.split('/').pop()
    const newPath = FileSystem.documentDirectory + fileName

    FileSystem.moveAsync({
      from: photo,
      to: newPath
    })

    setPhoto(newPath)
    props.navigation.navigate('UserPhoto', { photo: newPath })
  }

  const pickImage = async () => {
    const image = ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    })
    return image;
  }
  
  return (
    <View style={styles.screen}>

      <Camera
        style={styles.camera}
        type={type}
        flash={flash}
        ratio='4:2'
        ref={ref => {
          setCameraRef(ref)
        }}>
        <View style={styles.topRow}>
          <TouchableOpacity
            onPress={() => {
              setFlash(flash === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.on
                : Camera.Constants.FlashMode.off)
            }}>
            {
              (flash === Camera.Constants.FlashMode.off) ? (
                <MaterialIcons name="flash-off" size={30} color="white" />
              ) : (
                  <MaterialIcons name="flash-on" size={30} color="white" />
                )
            }
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setType(type === Camera.Constants.Type.front
                ? Camera.Constants.Type.back
                : Camera.Constants.Type.front)
            }}>
            <MaterialIcons name="swap-horiz" size={35} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.iconRow} >
          <TouchableOpacity onPress={() => pickImage()}>
            <Entypo name="archive" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => takePic()}>
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
    </View >
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
  topRow: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
    paddingTop: 40,
    paddingBottom: 10
  },
  iconRow: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
    paddingVertical: 20
  }

})

export default CameraScreen