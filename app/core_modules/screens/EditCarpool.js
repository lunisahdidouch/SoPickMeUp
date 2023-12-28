// app/core_modules/screens/EditCarpool.js
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import { saveCarpool } from '../services/storageService';
import { deleteCarpool } from '../services/deleteCarpool';
import TextField from '../../user_input_modules/components/TextField';
import DatePicker from '../../user_input_modules/components/DatePicker';
import TimePicker from '../../user_input_modules/components/TimePicker';
import AvailableSeats from '../../user_input_modules/components/AvailableSeats';
import DropDown from '../../user_input_modules/components/DropDown';
import CustomButton from '../components/CustomButton';
import UserContext from '../../user_modules/services/UserContext';


let driverName = 'Anoniem';

// const handleSubmit = async (carpoolDetails, carpoolDate, editedCarpool, editedCarpoolDetails, date, currentUser) => {
//   // console.log("New date---: " + newDate)
//   if(editedCarpool.nameVisibility === 'true') {
//     driverName = currentUser.name;
//   }
//   // console.log("Edited carpool: " + JSON.stringify(editedCarpool) + "-------------" + JSON.stringify(editedCarpool.details.departureTime));
//   await saveCarpool(editedCarpool, editedCarpoolDetails, date);
//   // setTimeout(() => {  
//   await deleteCarpool(carpoolDetails.carpoolId, carpoolDate);
//   // }, 4000);
// };


const EditCarpool = ({ route }) => {
  const { carpoolDetails, carpoolDate } = route.params;

  const [editedCarpool, setEditedCarpool] = useState(carpoolDetails);
  const [editedCarpoolDetails, setEditedCarpoolDetails] = useState(carpoolDetails.details);
  const [date, setDate] = useState(carpoolDate);
  const currentUser = useContext(UserContext);
  
  const rideItems = [
    { label: 'Heen', value: 'false'},
    { label: 'Heen en terug', value: 'true'},
  ];

  const visibilityItems = [
    { label: 'Anoniem', value: 'false'},
    { label: 'Zichtbaar', value: 'true'},
  ];
  
  let newDate = carpoolDate;
  
  // console.log("Carpool details: " + JSON.stringify(carpoolDetails.departureTime));
  // console.log("Carpool details 123: " + JSON.stringify(carpoolDetails.details.departureTime));
  
  
  const handleInputChangeDetails = (name, value) => {
    // console.log("Values: " + name, value);
    setEditedCarpoolDetails({ ...editedCarpoolDetails, [name]: value });
  };
  
  const handleInputChange = (name, value) => {
    // console.log("Values: " + name, value);
    setEditedCarpool({ ...editedCarpool, [name]: value });
  };

  const handleSubmit = async () => {
    // console.log("New date---: " + newDate)
    if(editedCarpool.nameVisibility === 'true') {
      driverName = currentUser.name;
    }
    // console.log("Edited carpool: " + JSON.stringify(editedCarpool) + "-------------" + JSON.stringify(editedCarpool.details.departureTime));
    await saveCarpool(editedCarpool, editedCarpoolDetails, date);
    await deleteCarpool(carpoolDetails.carpoolId, carpoolDate);
    Alert.alert("Carpool is aangepast")

  };



  return (
    <ScrollView style={styles.container}>
        <TextField
            placeholder="Vertrek plaats"
            value={editedCarpool.starterLocation}
            onChangeText={(text) => handleInputChange('starterLocation', text)}
        />
        <TextField
            placeholder="Bestemming"
            value={editedCarpool.endLocation}
            onChangeText={(text) => handleInputChange('endLocation', text)}
        />
        <View style={styles.pickers}>
          <DatePicker
            value={new Date(date)}
            onDateChange={(selectedDate) => setDate(selectedDate.toLocaleDateString())}
          />
          <TimePicker
            value={new Date(`${editedCarpool.details.departureTime}`)}
            onTimeChange={(selectedTime) => handleInputChangeDetails('departureTime', selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))}
          />
        </View>
        <AvailableSeats
          value={editedCarpool.details.availableSeats}
          onChangeText={(text) => handleInputChangeDetails('availableSeats', text)}
        />
        <DropDown
          items={rideItems}
          defaultValue={rideItems[0].value}
          name="rideType"
          mainValue={editedCarpool.details.rideType}
          handleInputChange={handleInputChangeDetails}
        />
        <Text style={styles.title}>Naam zichtbaarheid</Text>
        <DropDown
          items={visibilityItems}
          defaultValue={visibilityItems[0].value}
          name="nameVisibility"
          mainValue={editedCarpool.details.nameVisibility}
          handleInputChange={handleInputChangeDetails}
        />
        <TextField
            placeholder="Opmerking"
            value={editedCarpool.details.comment}
            onChangeText={(text) => handleInputChangeDetails('comment', text)}
            multiline={true}
            height={80}
        />
        <View className="items-center mt-5">
          <CustomButton
          backgroundColor="transparent"
          borderColor='#0070AD'
          textColor='#0070AD'
          onPress={handleSubmit}
          // onPress={handleSubmit(carpoolDetails, carpoolDate, editedCarpool, editedCarpoolDetails, date, currentUser)}
          title="Wijzig carpool"
          />
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

export default EditCarpool;