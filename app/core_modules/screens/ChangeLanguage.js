import React from 'react';
import { View } from 'react-native';
import i18n from '../data/Translations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates';
import CustomButton from '../components/CustomButton';

const LanguageSelectionScreen = ({ navigation }) => {
  const setLanguage = async (language) => {
    i18n.locale = language;
    await AsyncStorage.setItem('selectedLanguage', language);
    Updates.reloadAsync();
  };
  let enColourbg = "transparent";
  let nlColourbg = "transparent";
  let enColourText = "#0070AD";
  let nlColourText = "#0070AD";

  if (i18n.locale === 'en') {
    enColourbg = "#0070AD";
    enColourText = "white";
    nlColourbg = "transparent";
  } else{
    enColourbg = "transparent";
    nlColourbg = "#0070AD";
    nlColourText = "white";
  }

  return (
    <View>
      <View className="items-center mt-32 mb-3">
          <CustomButton
              title="English"
              backgroundColor={enColourbg}
              borderColor='#0070AD'
              textColor={enColourText}
              width={300}
              height={65}
              onPress={() => setLanguage('en')}
          />
      </View>
      <View className="items-center mt-5 mb-3">
          <CustomButton
              title="Nederlands"
              backgroundColor={nlColourbg}
              borderColor='#0070AD'
              textColor={nlColourText}
              width={300}
              height={65}
              onPress={() => setLanguage('nl')}
          />
      </View>
    </View>
    
  );
};

export default LanguageSelectionScreen;