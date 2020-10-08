import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, PermissionsAndroid, Platform } from 'react-native'
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CameraRoll from "@react-native-community/cameraroll";

const UserPhotoScreen = props => {
  const photo = props.route.params.photo

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    const hasPermission = await PermissionsAndroid.check(permission);

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';

  }

  const savePic = async () => {
    if (!await hasAndroidPermission) {
      return;
    }

    CameraRoll.save(photo)
  }
  return (
    <View style={styles.screen}>
      <ImageBackground source={{ uri: photo }} style={styles.image} >
        <View style={styles.imageOptionsContainer}>
          <View style={styles.imageOptions}>
            <TouchableOpacity>
              <MaterialIcons name="file-download" size={30} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
              <MaterialIcons name="check" size={30} color="white"
                onPress={() => {
                  props.navigation.navigate('ProfileScreen', {
                    photo: photo
                  })
                }} />
            </TouchableOpacity>

            <TouchableOpacity>
              <AntDesign
                name="reload1"
                size={25}
                color="white"
                onPress={() => { props.navigation.goBack() }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.back}>
            <TouchableOpacity>
              <AntDesign
                name="down"
                size={25}
                color="white"
                onPress={() => { props.navigation.goBack() }}
              />
            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  image: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  imageOptionsContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  imageOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '35%',
  },
  back: {
    flexDirection: 'row',
    alignItems: "center",
    width: '10%'
  }
})

export default UserPhotoScreen