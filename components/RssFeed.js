import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { View, ActivityIndicator, Text, StyleSheet, Image, } from 'react-native';
import * as rssParser from 'react-native-rss-parser';

const RssFeed = (props) => {
  const [loading, setLoading] = useState(true);
  const [rssArray, setRssArray] = useState([]);
  const [rssTitle, setRssTitle] = useState('');

  const rssContent = async () => {
    return await fetch('https://photojournal.jpl.nasa.gov/rss/gallery/universe')
      .then(res => res.text())
      .then(resData => rssParser.parse(resData))
      .then(rss => {
        setRssArray(rss.items);
        setRssTitle(rss.title);
      }).then(() => setLoading(false))
  }

  useEffect(() => {
    rssContent();
  }, [])

  return (
    <View style={styles.screen}>
      {
        loading ? (
          <ActivityIndicator style={styles.loading} size="large" color="white" />
        ) : (
            <View>
              <Text style={{ ...styles.rssTitle, ...styles.text }}>{rssTitle}</Text>
              {rssArray.map((item, index) => {
                const htmlSplit = item.description.split("'");
                const imageURL = htmlSplit[1];

                return (
                  <View style={styles.item} key={index}>
                    <Image source={{ uri: imageURL }} style={styles.image} />
                    <View style={styles.container}>
                      <Text style={{ ...styles.title, ...styles.text }}>{item.title}</Text>
                      <Text style={{ ...styles.date, ...styles.text, color: '#999' }}>Published on: {item.published}</Text>
                      <Text style={{ ...styles.category, ...styles.text }}>Category: {item.categories[0].name}</Text>
                    </View>
                  </View>
                )
              })}
            </View>
          )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: "center",
    justifyContent: "center"
  },
  loading: {
    height: '100%',
    transform: [{ scale: 2 }],
    marginVertical: 50
  },
  item: {
    paddingVertical: 30,
    borderBottomWidth: 0.2,
    borderBottomColor: 'white'
  },
  rssTitle: {
    fontSize: 22,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignSelf: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: 'white'
  },
  image: {
    height: 250,
    width: '100%',
  },
  container: {
    padding: 15
  },
  text: {
    marginVertical: 2,
    color: '#ccc',
    fontFamily: 'sans-serif'
  },
  title: {
    fontSize: 18
  },
  date: {
    fontSize: 16,
    color: 'gray'
  },
  category: {
    fontSize: 16,
  }
})
export default RssFeed;