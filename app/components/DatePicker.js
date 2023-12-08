import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const AndroidDatePicker = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
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

  return (
    <View>
      <Button onPress={showDatePicker} title="Show date picker!" />
      <Text>Selected: {date.toLocaleDateString()}</Text>
    </View>
  );
};

export default AndroidDatePicker;