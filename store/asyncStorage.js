import AsyncStorage from '@react-native-community/async-storage';

export const getData = async () => {
  const data = await AsyncStorage.getItem("@events:key") 
  return await JSON.parse(data) || [];
}

export const storeData = async (events) => {
  try {
    await AsyncStorage.setItem("events:key", JSON.stringify(events));
  } catch (e) {
    console.error(e);
  }
}