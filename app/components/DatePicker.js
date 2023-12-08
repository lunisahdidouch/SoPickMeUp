import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import CalendarIcon from '../assets/CalendarIcon';

export default function Button(props) {
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

  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={showDatePicker}>
      <Text style={styles.text}>{date.toLocaleDateString()} </Text>
      <CalendarIcon width="38" height="38" color="#FFF" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    width: 150,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderColor: '#686666',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});


// const AndroidDatePicker = () => {
  // const [date, setDate] = useState(new Date());

  // const onChange = (event, selectedDate) => {
  //   if (selectedDate) {
  //     setDate(selectedDate);
  //   }
  // };

  // const showDatePicker = () => {
  //   DateTimePickerAndroid.open({
  //     value: date,
  //     onChange,
  //     mode: 'date',
  //     is24Hour: true,
  //   });
  // };

//   return (
//     <View>
//       <Pressable 
//       onPress={showDatePicker} 
//       title="Show date picker!" 
//       styles={styles.button}
//       >
//         <Text>Selected: {date.toLocaleDateString()}</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 4,
//     elevation: 3,
//     backgroundColor: 'black',
//   },
// });

// export default AndroidDatePicker;

