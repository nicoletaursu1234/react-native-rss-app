import React, { useState, useEffect, useRef } from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import * as eventActions from '../../store/actions/events'
import colors from '../../constants/colors'
import AsyncStorage from '@react-native-community/async-storage';

const AddEventScreen = props => {
  const dispatch = useDispatch();

  const params = props.route.params;
  const selectedDate = params.selectedDate;
  const eventDate = params.date;
  const eventTitle = params.name;
  const eventDescription = params.description;
  const isEdit = params.isEdit;
  const id = params.id;

  const eventsList = useSelector(state => {
    const eventsArr = []
    for (const key in state.events.events) {
      eventsArr.push({
        id: state.events.events[key].id,
        name: state.events.events[key].name,
        description: state.events.events[key].description,
        date: state.events.events[key].date
      })
    }
    return eventsArr.sort((a, b) => a.id > b.id ? 1 : -1)
  })

  const [date, setDate] = useState(isEdit ? eventDate : selectedDate)
  const [eventName, setEventName] = useState(isEdit ? eventTitle : '')
  const [description, setDescription] = useState(isEdit ? eventDescription : '')
 

  const handleAdd = () => {
    if(!isEdit){
      dispatch(eventActions.addEvent({eventName, description, date}));
    } else {
      dispatch(eventActions.updateEvent({eventName, description, date}, id));
    }
    props.navigation.goBack();
  }
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
        <Text style={styles.date}>Date: {date}</Text>
        <View style={styles.actions}>
          <Text
            style={styles.add}
            onPress={() => handleAdd()}>
            ADD
          </Text>
          <Text
            style={styles.cancel}
            onPress={() => props.navigation.goBack()}>
            CANCEL
          </Text>
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