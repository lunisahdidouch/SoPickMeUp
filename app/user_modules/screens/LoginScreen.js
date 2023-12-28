import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates';
import CustomButton from '../../core_modules/components/CustomButton';
import TextField from '../../user_input_modules/components/TextField';

const refresh = async () => {
  Updates.reloadAsync();
};


const LoginScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  // const navigation1 = useNavigation();
  
  // const handlePress = () => {
  //   navigation1.navigate('Alle carpools');
  // };

  const handleLogin = async () => {
    try {
      const usersString = await AsyncStorage.getItem('users');
      const users = usersString ? JSON.parse(usersString) : [];
      const user = users.find(u => u.name === name && u.password === password);


      if (user) {
        console.log('user: -----', JSON.stringify(user));
        await AsyncStorage.setItem('currentUser', JSON.stringify(user));
        refresh();
        // handlePress();
      } else {
        Alert.alert('Login Failed', 'Incorrect username or password');
      }
    } catch (error) {
      Alert.alert('Login Error', 'An error occurred during login');
    }
  };
  return (
    <View className="mt-20 items-center">
      <TextField placeholder="Username" onChangeText={setName} value={name} />
      <TextField placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry={true}/>
      {/* <TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry /> */}
      <View className="mt-5">
        <CustomButton title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default LoginScreen;
