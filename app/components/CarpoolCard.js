import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BusFront from '../assets/BusFront';


const CarpoolCard = ({ carpoolDetails }) => {
  return (
    <View style={styles.card}>
      <View style={styles.busIcon}>
        <BusFront width="53" height="53" color="#0070AD" />
      </View>
      <View style={styles.carpoolDetails}>
        <View style={styles.departureRow}>
          <View>
            <View style={styles.timeRow}>
              <Text>{carpoolDetails.details.departureTime}</Text>
              <Text>{carpoolDetails.starterLocation}</Text>
            </View>
            <Text style={styles.destination}>{carpoolDetails.endLocation}</Text>
          </View>
          <Text className="ml-4">Vrije plaatsen: {carpoolDetails.details.availableSeats}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 18,
    width: 350,
    padding: 10,
    marginBottom: 10,
  },
  busIcon: {
    marginRight: 30,
    justifyContent: 'center',
  },
  carpoolDetails: {
    // marginLeft: 10,
  },
  timeRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  departureRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  destination: {
    marginLeft: 37,
  },
});

export default CarpoolCard;