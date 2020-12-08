import React, { useState, useEffect, useRef } from 'react'
import { AppLoading } from 'expo';
import { View, ActivityIndicator, Text, Button, StyleSheet, TextInput } from 'react-native'

import colors from "../../constants/colors"
import SearchBar from '../../components/SearchBar'
import RssFeed from '../../components/RssFeed'
import { ScrollView } from 'react-native-gesture-handler'

const MainFeedScreen = props => {
  return (
    <ScrollView style={styles.feed}>
      <RssFeed style={styles.rss}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  feed: {
    backgroundColor: colors.background
  },
  bar: {
    height: '20%'
  },
});

export default MainFeedScreen;
