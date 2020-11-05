import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import * as rssParser from 'react-native-rss-parser'

import colors from "../../constants/colors"
import SearchBar from '../../components/SearchBar'
import RssFeed from '../../components/RssFeed'
import { ScrollView } from 'react-native-gesture-handler'

const MainFeedScreen = props => {
  
  return (
  <ScrollView style={styles.screen}>
    {/* <SearchBar style={styles.bar}/> */}
    <RssFeed style={styles.rss}/>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background
  },
  bar: {
    height: '20%'
  },
  rss: {
    height: '80%'
  }
});

export default MainFeedScreen;
