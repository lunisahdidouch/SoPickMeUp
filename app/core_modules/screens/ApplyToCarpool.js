import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import UserContext from '../../user_modules/services/UserContext';
import { useContext } from 'react';
import CarpoolRequest from '../models/CarpoolRequest';
import CustomButton from '../components/CustomButton';
import randomValue from '../utils/randomValue';
import saveCarpool from '../services/storageService';
import TextField from '../../user_input_modules/components/TextField';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import i18n from '../data/Translations';

const handlePress = (navigation) => {
  navigation.navigate(i18n.t('tab2'));
};

// const ApplyToCarpoolTemp = async (carpoolDetails, carpoolDate, userId) => {
//   if (!carpoolDetails.details.passengers) {
//     carpoolDetails.details.passengers = [];
//   }
//   console.log("User id check: " + userId);
//   carpoolDetails.details.passengers.push(userId);
//   await saveCarpool(carpoolDetails, carpoolDetails.details, carpoolDate);
// }

const ApplyToCarpool = ({ route }) => {
  const { carpoolDetails, carpoolDate } = route.params;
  const [pickupLocation, setPickupLocation] = useState("");
  const currentUser = useContext(UserContext);
  const navigation = useNavigation();


  const handleInputChange = (value) => {
      setPickupLocation(value);
  };
  const handleSubmit = async() => {
    const newCarpoolRequest = new CarpoolRequest(carpoolDetails.userId, currentUser.currentUser.userId, pickupLocation, carpoolDetails.details.carpoolId);
    let savedCarpoolRequests = JSON.parse(await AsyncStorage.getItem('carpoolRequests')) || [];
    savedCarpoolRequests.push({ ...newCarpoolRequest});
    await AsyncStorage.setItem('carpoolRequests', JSON.stringify(savedCarpoolRequests));
    Alert.alert("Aanvraag ingestuurd!")
    // await ApplyToCarpoolTemp(carpoolDetails, carpoolDate, currentUser.currentUser.userId);
    handlePress(navigation);
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
