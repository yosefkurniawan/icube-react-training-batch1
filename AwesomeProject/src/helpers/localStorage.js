import AsyncStorage from '@react-native-community/async-storage';

const saveItem = async (key, value) => {
    console.log('saving');
    await AsyncStorage.setItem('token', value);
};

const getItem = async (key) => {
    const value = await AsyncStorage.getItem(key);
    return value;
};

const removeItem = async (key) => {
    await AsyncStorage.removeItem(key);
};

export {saveItem, getItem, removeItem};
