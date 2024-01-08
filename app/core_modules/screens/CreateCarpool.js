import React, { useState, useContext } from 'react';
import { View, ScrollView, StyleSheet, Text, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Carpool from '../models/Carpool';
import CarpoolDetails from '../models/CarpoolDetails';
import { saveCarpool } from '../services/storageService';
import TextField from '../../user_input_modules/components/TextField';
import DatePicker from '../../user_input_modules/components/DatePicker';
import TimePicker from '../../user_input_modules/components/TimePicker';
import AvailableSeats from '../../user_input_modules/components/AvailableSeats';
import DropDown from '../../user_input_modules/components/DropDown';
import CustomButton from '../components/CustomButton';
import UserContext from '../../user_modules/services/UserContext';
import { useNavigation } from '@react-navigation/native';
import i18n from '../data/Translations';

const handleNavigation = (navigation) => {
  navigation.navigate(i18n.t('tab2'), {shouldRefresh: true});
};

const CreateCarpool = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
      starterLocation: '',
      endLocation: '',
      tripDuration: '',
      departureDate: new Date().toISOString().split('T')[0],
      departureTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      arrivalTime: '',
      rideType: 'false',
      availableSeats: '1',
      nameVisibility: 'false',
      comment: '',
  });

  const rideItems = [
    { label: i18n.t('rideTypeOption1') , value: 'false'},
    { label: i18n.t('rideTypeOption2'), value: 'true'},
  ];

  const visibilityItems = [
    { label: i18n.t('nameVisibilityOption1'), value: 'false'},
    { label: i18n.t('nameVisibilityOption2'), value: 'true'},
  ];

  let driverName = 'Anoniem';
  const currentUser = useContext(UserContext);

  const handleInputChange = (name, value) => {
      setFormData({ ...formData, [name]: value });
  };

  

  const handleSubmit = async () => {
    const { starterLocation, endLocation, departureDate, departureTime, availableSeats, rideType, nameVisibility, comment } = formData;
    const userId = currentUser.currentUser.userId;

    if(nameVisibility === 'true') {
      driverName = currentUser.name;
    }
    const newCarpool = new Carpool(userId, starterLocation, endLocation);
    const newCarpoolDetails = new CarpoolDetails(newCarpool.carpoolId, departureTime, availableSeats, rideType, nameVisibility, driverName, comment);
    await saveCarpool(newCarpool, newCarpoolDetails, departureDate);
    Alert.alert(i18n.t('carpoolCreated'))
    handleNavigation(navigation);
  };
  return (
    // <ScrollView style={styles.container}>
    // <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
    //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <View style={styles.container}>
        <Text className="ml-4 mb-5 mt-5 font-extrabold text-xl">{i18n.t('createCarpoolHeader')}</Text>
        <TextField
            placeholder={i18n.t('startLocation')}
            value={formData.starterLocation}
            onChangeText={(text) => handleInputChange('starterLocation', text)}
        />
        <TextField
            placeholder={i18n.t('endLocation')}
            value={formData.endLocation}
            onChangeText={(text) => handleInputChange('endLocation', text)}
        />
        <View style={styles.pickers}>
          <DatePicker
            value={new Date(formData.departureDate)}
            onDateChange={(selectedDate) => handleInputChange('departureDate', selectedDate.toISOString().split('T')[0])}
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
        <Text style={styles.title}>{i18n.t('nameVisibility')}</Text>
        <DropDown
          items={visibilityItems}
          defaultValue={visibilityItems[0].value}
          name="nameVisibility"
          mainValue={formData.nameVisibility}
          handleInputChange={handleInputChange}
        />

        <TextField
            placeholder={i18n.t('comment')}
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
          title={i18n.t('createCarpool')}
          />
        </View>
      </View>
     // </TouchableWithoutFeedback>
    //  </KeyboardAvoidingView> 

    // </ScrollView>

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

export default CreateCarpool