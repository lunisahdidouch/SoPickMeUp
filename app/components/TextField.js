import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextField = ({ placeholder, value, onChangeText, keyboardType}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: 340,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 10,
    fontSize: 16,
  },
});

export default TextField;