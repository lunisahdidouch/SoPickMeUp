import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import Carpool from '../models/Carpool';
import CarpoolDetails from '../models/CarpoolDetails'; 
import CarpoolDate from '../models/CarpoolDate'; 
import { saveCarpool } from '../services/storageUtil';



const HomeScreen = () => {
  const [formData, setFormData] = useState({
      starterLocation: '',
      endLocation: '',
      tripDuration: '',
      departureDate: '',
      departureTime: '',
      arrivalTime: '',
      rideType: '',
      availableSeats: ''
  });

  const handleInputChange = (name, value) => {
      setFormData({ ...formData, [name]: value });
  };

  const [carpoolDates, setCarpoolDates] = useState(new CarpoolDate());

  const handleSubmit = () => {
    const { starterLocation, endLocation, departureDate, departureTime, availableSeats, rideType, comment } = formData;
    const userId = '5';
    const newCarpool = new Carpool(userId, starterLocation, endLocation);
    const newCarpoolDetails = new CarpoolDetails(newCarpool.carpoolId, departureTime, availableSeats, rideType === 'returning', true, comment);
  
    saveCarpool(newCarpool, newCarpoolDetails, departureDate);
  
    // carpoolDates.addCarpool(newCarpool.carpoolId, departureDate);
    // setCarpoolDates(carpoolDates);
  };
  return (
      <View style={styles.container}>
          <TextInput
              placeholder="Departure Location"
              value={formData.starterLocation}
              onChangeText={(text) => handleInputChange('starterLocation', text)}
          />
          <TextInput
              placeholder="Destination"
              value={formData.endLocation}
              onChangeText={(text) => handleInputChange('endLocation', text)}
          />
          <TextInput
              placeholder="Trip Duration"
              value={formData.tripDuration}
              onChangeText={(text) => handleInputChange('tripDuration', text)}
          />
          <TextInput
              placeholder="Departure Date"
              value={formData.departureDate}
              onChangeText={(text) => handleInputChange('departureDate', text)}
          />
          <TextInput
              placeholder="Departure Time"
              value={formData.departureTime}
              onChangeText={(text) => handleInputChange('departureTime', text)}
          />
          <TextInput
              placeholder="Ride Type"
              value={formData.rideType}
              onChangeText={(text) => handleInputChange('rideType', text)}
          />
          <TextInput
              placeholder="Available Seats"
              keyboardType="numeric"
              value={formData.availableSeats}
              onChangeText={(text) => handleInputChange('availableSeats', text)}
          />
          <Button title="Create Carpool" onPress={handleSubmit} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
  },
});

export default HomeScreen