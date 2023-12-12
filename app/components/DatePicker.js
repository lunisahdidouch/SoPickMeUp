import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import CalendarIcon from '../assets/CalendarIcon';

export default function DatePicker(props, value, onChangeText) {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      props.onDateChange(selectedDate);
    }
  };

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: 'date',
      is24Hour: true,
    });
  };

  // const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={showDatePicker}>
      <Text style={styles.text}
        value={value}
        onChangeText={onChangeText}
      >
        {date.toLocaleDateString()} 
      </Text>
      <CalendarIcon width="32" height="32" color="transparent" strokeColor="#0070AD"/>
    </Pressable>
  );
}

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