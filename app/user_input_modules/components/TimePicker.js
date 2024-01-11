import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import ClockIcon from '../../assets/ClockIcon';

export default function TimePicker(props, value, onChangeText) {
  const [time, setTime] = useState(new Date());

  const onChange = (event, selectedTime) => {
    if (selectedTime) {
      setTime(selectedTime);
      props.onTimeChange(selectedTime);
    }
  };
  const showTimePicker = () => {
    DateTimePickerAndroid.open({
      value: time,
      onChange,
      mode: 'time',
      is24Hour: true,
    });
  };

  return (
    <Pressable style={styles.button} onPress={showTimePicker}>
    <Text style={styles.text}
      value={value}
      onChangeText={onChangeText}
    >
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} 
    </Text>
    <ClockIcon width="32" height="32" color="transparent" strokeColor="#0070AD"/>
  </Pressable> 
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 8,
    width: 150,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderColor: '#686666',
    margin: 12,
  },
  text: {
    fontSize: 16,
    marginRight: 6,
    marginLeft: 6,
    color: '#686666',
  },
});