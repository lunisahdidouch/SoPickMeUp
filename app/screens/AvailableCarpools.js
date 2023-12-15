import React, { useState, useContext } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Carpool from '../models/Carpool';
import CarpoolDetails from '../models/CarpoolDetails';
import { saveCarpool } from '../services/storageService';
import TextField from '../components/user_input_modules/TextField';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DatePicker from '../components/user_input_modules/DatePicker';
import TimePicker from '../components/user_input_modules/TimePicker';
import AvailableSeats from '../components/user_input_modules/AvailableSeats';
import DropDown from '../components/user_input_modules/DropDown';
import randomValue from '../utils/randomValue';
import CustomButton from '../components/CustomButton';
import UserContext from '../services/UserContext';


const AvailableCarpools = () => {
  const [formData, setFormData] = useState({
      starterLocation: '',
      endLocation: '',
      tripDuration: '',
      departureDate: new Date().toLocaleDateString(),
      departureTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      arrivalTime: '',
      rideType: 'false',
      availableSeats: '1',
      nameVisibility: 'false',
      comment: '',
  });

  const rideItems = [
    { label: 'Heen', value: 'false'},
    { label: 'Heen en terug', value: 'true'},
  ];

  const visibilityItems = [
    { label: 'Anoniem', value: 'false'},
    { label: 'Zichtbaar', value: 'true'},
  ];

  let driverName = 'Anoniem';
  const currentUser = useContext(UserContext);
  // console.log(currentUser.name);

 
  const deleteCarpools = async () => {
    try {
        await AsyncStorage.removeItem('carpoolsByDate');
        console.log('Carpools deleted!');
    } catch (error) {
        console.error('Failed to delete carpools', error);
    }
};


  const handleInputChange = (name, value) => {
      console.log("Values: " + name, value);
      setFormData({ ...formData, [name]: value });
  };

  

  const handleSubmit = () => {
    const { starterLocation, endLocation, departureDate, departureTime, availableSeats, rideType, nameVisibility, comment } = formData;
    const userId = randomValue(4);
    console.log("User ID: " + userId);

    if(nameVisibility === 'true') {
      driverName = currentUser.name;
    }
    const newCarpool = new Carpool(userId, starterLocation, endLocation);
    const newCarpoolDetails = new CarpoolDetails(newCarpool.carpoolId, departureTime, availableSeats, rideType, nameVisibility, driverName, comment);
  
    saveCarpool(newCarpool, newCarpoolDetails, departureDate);

  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <TextField
            placeholder="Vertrek plaats"
            value={formData.starterLocation}
            onChangeText={(text) => handleInputChange('starterLocation', text)}
        />
        <TextField
            placeholder="Bestemming"
            value={formData.endLocation}
            onChangeText={(text) => handleInputChange('endLocation', text)}
        />
        <View style={styles.pickers}>
          <DatePicker
            value={new Date(formData.departureDate)}
            onDateChange={(selectedDate) => handleInputChange('departureDate', selectedDate.toLocaleDateString())}
          />
          <TimePicker
            value={new Date(`${formData.departureTime}`)}
            onTimeChange={(selectedTime) => handleInputChange('departureTime', selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))}
          />
        </View>
        <AvailableSeats
          value={formData.availableSeats}
          onChangeText={(text) => handleInputChange('availableSeats', text)}
        />
        <DropDown
          items={rideItems}
          defaultValue={rideItems[0].value}
          name="rideType"
          mainValue={formData.rideType}
          handleInputChange={handleInputChange}
        />
        <Text style={styles.title}>Naam zichtbaarheid</Text>
        <DropDown
          items={visibilityItems}
          defaultValue={visibilityItems[0].value}
          name="nameVisibility"
          mainValue={formData.nameVisibility}
          handleInputChange={handleInputChange}
        />

        <TextField
            placeholder="Opmerking"
            value={formData.comment}
            onChangeText={(text) => handleInputChange('comment', text)}
            multiline={true}
            height={80}
        />
        <View className="items-center mt-5">
          <CustomButton
          backgroundColor="transparent"
          borderColor='#0070AD'
          textColor='#0070AD'
          onPress={handleSubmit}
          title="Maak carpool aan"
          />
        </View>
        <View className="items-center mt-5">
          <CustomButton
          backgroundColor="red"
          borderColor='red'
          textColor='white'
          onPress={deleteCarpools}
          title="Verwijder carpools"
          />
        </View>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
  },
  createCarpool:{
    marginTop: 20
  },
  pickers:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 363,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 20,
    marginTop: 10,
  },
});

export default AvailableCarpools