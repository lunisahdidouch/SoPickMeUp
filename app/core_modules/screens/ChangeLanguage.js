import React from 'react';
import { View, Button } from 'react-native';
import i18n from '../data/Translations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates';

const LanguageSelectionScreen = ({ navigation }) => {
  const setLanguage = async (language) => {
    i18n.locale = language;
    await AsyncStorage.setItem('selectedLanguage', language);
    Updates.reloadAsync();
  };

  return (
    <View>
      <Button title="English" onPress={() => setLanguage('en')} />
      <Button title="Nederlands" onPress={() => setLanguage('nl')} />
    </View>
  );
};

export default LanguageSelectionScreen;
