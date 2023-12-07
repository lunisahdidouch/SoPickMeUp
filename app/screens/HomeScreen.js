import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import Carpool from '../models/Carpool';
import CarpoolDetails from '../models/CarpoolDetails'; 
import { saveCarpool } from '../services/storageUtil';
import AsyncStorage from '@react-native-async-storage/async-storage';




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

  const deleteCarpools = async () => {
    try {
        await AsyncStorage.removeItem('carpoolsByDate');
        console.log('Carpools deleted!');
    } catch (error) {
        console.error('Failed to delete carpools', error);
    }
};


  const handleInputChange = (name, value) => {
      setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { starterLocation, endLocation, departureDate, departureTime, availableSeats, rideType, comment } = formData;
    const userId = '5';
    const newCarpool = new Carpool(userId, starterLocation, endLocation);
    const newCarpoolDetails = new CarpoolDetails(newCarpool.carpoolId, departureTime, availableSeats, rideType === 'returning', true, comment);
  
    saveCarpool(newCarpool, newCarpoolDetails, departureDate);

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
          <Button class="createCarpool" title="Create Carpool" onPress={handleSubmit} />
          <Button title="Delete Carpools" onPress={deleteCarpools} />
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
  createCarpool:{
    marginBottom: 4
  }
});

export default HomeScreen