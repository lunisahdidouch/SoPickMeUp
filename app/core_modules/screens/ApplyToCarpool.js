import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import UserContext from '../../user_modules/services/UserContext';
import { useContext } from 'react';
import CarpoolRequest from '../models/CarpoolRequest';
import CustomButton from '../components/CustomButton';
import randomValue from '../utils/randomValue';
import { saveCarpool } from '../services/storageService';
import TextField from '../../user_input_modules/components/TextField';
import AsyncStorage from '@react-native-async-storage/async-storage';


// const ApplyToCurrentCarpool = async (carpoolDetails, carpoolDate) => {
//   if (!carpoolDetails.details.passengers) {
//     carpoolDetails.details.passengers = [];
//   }
//   const randomId = randomValue(6, 9);
//   console.log("Random Id check: " +  randomId);
//   carpoolDetails.details.passengers.push(randomId);
//   saveCarpool(carpoolDetails, carpoolDetails.details, carpoolDate);
// }



const ApplyToCarpool = ({ route }) => {
  const { carpoolDetails, carpoolDate } = route.params;
  const [pickupLocation, setPickupLocation] = useState("");
  const currentUser = useContext(UserContext);


  const handleInputChange = (value) => {
      setPickupLocation(value);
  };

  

  const handleSubmit = async() => {
    const userId = randomValue(1, 5);
    console.log("User ID: " + userId);
    const newCarpoolRequest = new CarpoolRequest(carpoolDetails.userId, currentUser.currentUser.userId, pickupLocation, carpoolDetails.details.carpoolId);
    console.log("New carpool request: " + JSON.stringify(newCarpoolRequest)); 
    let savedCarpoolRequests = JSON.parse(await AsyncStorage.getItem('carpoolRequests')) || [];
    savedCarpoolRequests.push({ ...newCarpoolRequest});
    console.log("To be saved carpool request: " + JSON.stringify(savedCarpoolRequests)); 
    await AsyncStorage.setItem('carpoolRequests', JSON.stringify(savedCarpoolRequests));
    Alert.alert("Aanvraag ingestuurd!")
  };

  return (
    <View className="mt-10 ml-3">
      <TextField
        placeholder="Ophaal locatie"
        value={pickupLocation}
        onChangeText={(text) => handleInputChange(text)}
      />
      <View className="items-center mt-5">
        <CustomButton
        backgroundColor="transparent"
        borderColor='#0070AD'
        textColor='#0070AD'
        title="Aanvragen"
        onPress={() => handleSubmit(carpoolDetails, carpoolDate)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    width: 350,
    height: 100,
    padding: 17,
    marginBottom: 20,
  },
  busIcon: {
    marginRight: 12,
    justifyContent: 'center',
  },
  timeRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  departureRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  destination: {
    marginLeft: 0,
    maxWidth: 100
  },
  routeIcon: {
    flex: 1,
    width: 23,
    backgroundColor: 'transparent',
  },
  chevronRight: {
    marginTop: 20,
  }
});

export default ApplyToCarpool;
