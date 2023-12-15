import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MinusIcon from '../../assets/MinusIcon';
import PlusIcon from '../../assets/PlusIcon';

const SeatPicker = (props, value, onChangeText) => {
  const [seats, setSeats] = useState(1);

  const decreaseSeats = () => {
    if (seats > 0) {
      setSeats(seats - 1);
      value = seats;
      props.onChangeText(seats - 1);
    }
  };

  const increaseSeats = () => {
    setSeats(seats + 1);
    props.onChangeText(seats + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aantal plekken</Text>
      <View style={styles.pickerContainer}>
        <TouchableOpacity onPress={decreaseSeats}>
          <MinusIcon width={32} height={32} color="#0070AD" strokeColor="transparent" />
        </TouchableOpacity>
        <Text style={styles.seatsText}
          onChangeText={onChangeText}
          >{seats}</Text>
        <TouchableOpacity onPress={increaseSeats}>
          <PlusIcon width={32} height={32} color="#0070AD" strokeColor="transparent" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  pickerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  seatsText: {
    fontSize: 24,
    marginHorizontal: 20,
  },
});

export default SeatPicker;
