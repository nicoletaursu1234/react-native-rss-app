import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../constants/colors'

const Search = props => {
  const [input, setInput] = useState('')
  const [link, setLink] = useState('https://www.google.com/search?q=')
  const [open, setOpen] = useState(null)

  const openBrowser = async () => {
    const query = input.replace(/\s+/g, "+");
    const result = await WebBrowser.openBrowserAsync(link + query);
    setOpen(result)
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => setInput(text)}
          value={input}
          maxLength={30}
          placeholder='Search photos available online'
          placeholderTextColor='#ccc'
        />
        <TouchableOpacity onPress={() => openBrowser()}>
          <Text style={styles.inputText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 10,
  },
  input: {
    borderRadius: 40,
    borderColor: 'gray',
    borderWidth: 0.6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 17
  },
  inputText: {
    color: colors.lightGreen,
    fontSize: 18
  }
})

export default Search