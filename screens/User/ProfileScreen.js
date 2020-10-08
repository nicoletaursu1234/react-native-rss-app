import React, { useState, useEffect } from 'react'
import { View, Alert, Modal, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import colors from '../../constants/colors'

const ProfileScreen = props => {
  let photo;
  const [image, setImage] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  if (props.route.params) {
    photo = props.route.params.photo
  }

  useEffect(() => {
    if (photo !== undefined) {
      setImage(photo)
    }
  }, [photo])

  return (
    <View style={styles.screen}>
      <View style={styles.centeredView} onPress={() => {
        setModalVisible(false);
      }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView} onPress={() => {
            setModalVisible(!modalVisible)
          }}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>View photo</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={{
                  ...styles.textStyle,
                  borderTopWidth: 0.5,
                  borderTopColor: 'white'
                }}
                onPress={() => {props.navigation.navigate("Camera"); setModalVisible(false)}}
                >
                  Take new photo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.circleWrapper}>
        <View style={styles.circle}>
          {(image) ? (
            <TouchableOpacity
              style={styles.image}
              onPress={() => {
                setTimeout(() => {
                  setModalVisible(true)
                }, 5000
                )
              }}>
              <Image source={{ uri: image }} style={styles.image} />
            </TouchableOpacity>
          ) : (
              <Ionicons
                name='md-camera'
                size={60}
                color='white'
                onPress={() => props.navigation.navigate('Camera')}
              />
            )}

        </View>
        <Text style={styles.name}>Username</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    height: '100%',
    backgroundColor: colors.background,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    backgroundColor: colors.header,
    borderRadius: 10,
    padding: 10,
    alignItems: "center"
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: colors.header,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  circleWrapper: {
    height: '35%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 0.3,
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
    width: 140,
    borderRadius: 70,
    borderColor: 'white',
    borderWidth: 0.7,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  name: {
    color: 'white',
    fontSize: 20,
    marginTop: 10
  }
})
export default ProfileScreen