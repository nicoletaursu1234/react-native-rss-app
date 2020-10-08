import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { useSelector, useDispatch } from 'react-redux'

import * as eventActions from '../../store/actions/events'
import Event from '../../components/Event'
import colors from '../../constants/colors'

const AddEvent = (props) => {

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
  console.log(eventsList)

  const handleDayPress = (day) => {
    props.navigation.navigate('AddDateEvent', {
      selectedDate: day.dateString
    });
  }

  return (
    <View style={styles.screen}>
      <Calendar
        style={styles.calendar}
        onDayPress={(day) => handleDayPress(day)}
      />

      <FlatList
        style={styles.list}
        data={eventsList}
        keyExtractor={(item) => item.id}
        renderItem={itemData => (
          <Event
            name={itemData.item.name}
            description={itemData.item.description}
            date={itemData.item.date}
            id={itemData.item.id}
          />
        )}
      />
    </View>
  )

}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background
  },
  list: {
    flex: 1
  }
})
export default AddEvent