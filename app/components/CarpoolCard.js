import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CarpoolCard = ({ carpoolDetails }) => {
  return (
    <View style={styles.card}>
      <Text>From: {carpoolDetails.starterLocation}</Text>
      <Text>To: {carpoolDetails.endLocation}</Text>
      <Text>Available Seats: {carpoolDetails.details.availableSeats}</Text>
      <Text>Departure Time: {carpoolDetails.details.departureTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});

export default CarpoolCard;