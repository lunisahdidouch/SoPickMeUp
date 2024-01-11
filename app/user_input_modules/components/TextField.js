import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextField = ({ placeholder, value, onChangeText, keyboardType, multiline, height="45", secureTextEntry = false}) => {
  const styles = StyleSheet.create({
    input: {
      height: height,
      width: 340,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: 'gray',
      borderRadius: 10,
      fontSize: 16,
    },
  });
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      multiline={multiline}
      secureTextEntry= {secureTextEntry}
    />
  );
};



export default TextField;