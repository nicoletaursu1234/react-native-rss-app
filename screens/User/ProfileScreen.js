import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const ProfileScreen = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.circleWrapper}>
        <View style={styles.circle}>
          <Ionicons
            style={styles.cameraIcon}
            name='md-camera'
            size={60}
            color='white'
            onPress={() => props.navigation.navigate('Camera')}
          />
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
    backgroundColor: '#23264F'
  },
  circleWrapper: {
    height: '35%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 0.3
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
    width: 140,
    borderRadius: 70,
    borderColor: 'white',
    borderWidth: 0.7
  },
  cameraIcon: {

  },
  name: {
    color: 'white',
    fontSize: 20,
    marginTop: 10
  }
})
export default ProfileScreen