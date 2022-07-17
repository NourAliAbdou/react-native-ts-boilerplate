import AsyncStorage from '@react-native-async-storage/async-storage';
import reactotron from 'reactotron-react-native';

const saveToStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // console.log(e, 'failed to save');
  }
};

const retrieveFromStorage = async (key: string) => {
  try {
    const token = await AsyncStorage.getItem(key);
    return token;
  } catch (e) {
    // console.log(e);
  }
};
const removeFromStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    reactotron.log!(key, 'removed');
  } catch (e) {
    // console.log(key, 'failed to remove', e);
  }
};

export { saveToStorage, retrieveFromStorage, removeFromStorage };
