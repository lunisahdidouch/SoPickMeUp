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
import i18n from '../data/Translations';
import { useNavigation } from '@react-navigation/native';


let driverName = 'Anoniem';
const handleNavigation = (navigation) => {
  navigation.navigate(i18n.t('tab1'));
};

const EditCarpool = ({ route }) => {
  const navigation = useNavigation();

  const { carpoolDetails, carpoolDate } = route.params;

  const [editedCarpool, setEditedCarpool] = useState(carpoolDetails);
  const [editedCarpoolDetails, setEditedCarpoolDetails] = useState(carpoolDetails.details);
  const [date, setDate] = useState(carpoolDate);
  const currentUser = useContext(UserContext);
  
  const rideItems = [
    { label: i18n.t('rideTypeOption1') , value: 'false'},
    { label: i18n.t('rideTypeOption2'), value: 'true'},
  ];

  const visibilityItems = [
    { label: i18n.t('nameVisibilityOption1'), value: 'false'},
    { label: i18n.t('nameVisibilityOption2'), value: 'true'},
  ];
  
  let newDate = carpoolDate;  
  
  const handleInputChangeDetails = (name, value) => {
    setEditedCarpoolDetails({ ...editedCarpoolDetails, [name]: value });
  };
  
  const handleInputChange = (name, value) => {
    setEditedCarpool({ ...editedCarpool, [name]: value });
  };

  const handleSubmit = async () => {
    if(editedCarpool.nameVisibility === 'true') {
      driverName = currentUser.name;
    }
    await saveCarpool(editedCarpool, editedCarpoolDetails, date);
    await deleteCarpool(carpoolDetails.carpoolId, carpoolDate);
    Alert.alert(i18n.t('carpoolEdited'))
    handleNavigation(navigation);
  };



  return (
    <ScrollView style={styles.container}>
        <TextField
            placeholder={i18n.t('startLocation')}
            value={editedCarpool.starterLocation}
            onChangeText={(text) => handleInputChange('starterLocation', text)}
        />
        <TextField
            placeholder={i18n.t('endLocation')}
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
        <Text style={styles.title}>{i18n.t('nameVisibility')}</Text>
        <DropDown
          items={visibilityItems}
          defaultValue={visibilityItems[0].value}
          name="nameVisibility"
          mainValue={editedCarpool.details.nameVisibility}
          handleInputChange={handleInputChangeDetails}
        />
        <TextField
            placeholder={i18n.t('comment')}
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
          title={i18n.t('editCarpool')}
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