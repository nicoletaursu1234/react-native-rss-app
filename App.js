import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native';

import MainNavigatorContainer from './navigation/MainNavigator'

export default function App() {
  return (
      <MainNavigatorContainer>
        <StatusBar style='light' />
      </MainNavigatorContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
