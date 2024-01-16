import React, { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import { CommonActions  } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates';
import CustomButton from '../../core_modules/components/CustomButton';
import TextField from '../../user_input_modules/components/TextField';
import i18n from '../../core_modules/data/Translations';

const refresh = async () => {
  Updates.reloadAsync();
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: i18n.t('tab2') }], 
    })
  );
};
const getStoredLanguage = async () => {
  const language = await AsyncStorage.getItem('selectedLanguage');
  if (language) {
    i18n.locale = language;
  }
};

const LoginScreen = () => {

  useEffect(() => {
    getStoredLanguage();
  }, []);
  const [name, setName] = useState('')
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const usersString = await AsyncStorage.getItem('users');
      const users = usersString ? JSON.parse(usersString) : [];
      const user = users.find(u => u.name === name && u.password === password);

      if (user) {
        await AsyncStorage.setItem('currentUser', JSON.stringify(user));
        refresh();
      } else {
        Alert.alert('Login Failed', 'Incorrect username or password');
      }
    } catch (error) {
      Alert.alert('Login Error', 'An error occurred during login');
    }
  };
  return (
    <View className="mt-20 items-center">
      <TextField placeholder={i18n.t('username')} onChangeText={setName} value={name} />
      <TextField placeholder={i18n.t('password')} onChangeText={setPassword} value={password} secureTextEntry={true}/>
      <View className="mt-5">
        <CustomButton title={i18n.t('login')} onPress={handleLogin} />
      </View>
    </View>
  );
};

export default LoginScreen;
