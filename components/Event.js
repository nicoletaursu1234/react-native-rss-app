import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'

import * as eventActions from '../store/actions/events'
import colors from '../constants/colors'

const Event = (props) => {
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity >
          <FontAwesome name='pencil' size={25} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { dispatch(eventActions.removeEvent(props.id))}}>
          <FontAwesome name='trash' size={25} color="darkred" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    alignSelf: 'center',
    borderColor: 'gray',
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  info: {
    maxWidth: '80%'
  },
  text: {
    marginBottom: 7
  },
  name: {
    fontSize: 19,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16
  },
  date: {
    color: 'gray',
    paddingTop: 5
  },
  actions: {
    flexDirection: 'row',
    width: 50,
    justifyContent: 'space-between'
  }

})

export default Event