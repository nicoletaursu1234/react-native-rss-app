import React, { useState, useEffect, useRef } from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux'
import * as eventActions from '../../store/actions/events'
import colors from '../../constants/colors'

const AddEventScreen = props => {
  const dispatch = useDispatch()
  const selectedDate = props.route.params.selectedDate;

  const [date, setDate] = useState(selectedDate)
  const [eventName, setEventName] = useState('')
  const [description, setDescription] = useState('')

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.header}>Add new event</Text>
        <TextInput
          style={styles.eventName}
          value={eventName}
          onChangeText={text => setEventName(text)}
          maxLength={30}
          placeholder='Event name'
        />
        <TextInput
          style={styles.description}
          value={description}
          onChangeText={text => setDescription(text)}
          maxLength={50}
          placeholder='Description'
          multiline
        />
        <Text style={styles.date}>Date: {selectedDate}</Text>
        <View style={styles.actions}>
          <Text
            style={styles.add}
            onPress={() => {
              dispatch(eventActions.addEvent({eventName, description, date}));
              props.navigation.goBack();
            }}>ADD</Text>
          <Text
            style={styles.cancel}
            onPress={() => props.navigation.goBack()}>CANCEL</Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background
  },
  container: {
    width: '80%',
    marginVertical: 20,
    alignItems: 'center'
  },
  header: {
    fontSize: 22,
    color: '#ccc',
    marginVertical: 30
  },
  eventName: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: '#ccc'
  },
  description: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: '#ccc'
  },
  date: {
    color: '#aaa',
    fontSize: 16,
    marginVertical: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
    marginTop: 30
  },
  add: {
    color: colors.lightGreen,
    fontSize: 18
  },
  cancel: {
    color: 'gray',
    fontSize: 18
  }
})

export default AddEventScreen