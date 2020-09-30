import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const AddEvent = (props) => {

  const handleDayPress = (day) => {
    props.navigation.navigate('AddDateEvent', {
      selectedDate: day.dateString
    });
  }

  return (
    <View>
      <Calendar 
        onDayPress={(day) => handleDayPress(day)}
      />
    </View>
  )

}

export default AddEvent