import React, { useContext } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Image } from 'expo-image';
import CustomButton from '../components/CustomButton';
import { saveCarpool } from '../services/storageService';
import i18n from '../data/Translations';
import { useNavigation } from '@react-navigation/native';
import UserContext from '../../user_modules/services/UserContext';

const CancelApplication = async (navigation, carpoolDetails, carpoolDate, userId) => {
  try{
    if (!carpoolDetails.details.passengers) {
      carpoolDetails.details.passengers = [];
    }
    carpoolDetails.details.passengers = carpoolDetails.details.passengers.filter(passengerId => passengerId !== userId);
    saveCarpool(carpoolDetails, carpoolDetails.details, carpoolDate);
    Alert.alert(i18n.t('applicationCanceled'))
    navigation.navigate(i18n.t('tab3'), {shouldRefresh: true});
  } catch (error) {
    console.log(error);
  }
}

const ChosenCarpool = ({ route }) => {
  const currentUser = useContext(UserContext);
  const navigation = useNavigation();
  const { carpoolDetails, carpoolDate } = route.params;

  return (
    <View className="mt-10 ml-3">
      <Text className="font-extrabold text-2xl mb-3 ">{i18n.t('overview')}</Text>
      <Text className="font-extrabold text-xl">{carpoolDate}</Text>
      
      <View style={styles.card}>
        <Text className="mr-1 max-w-[50] w-10 font-extrabold">{carpoolDetails.details.departureTime}</Text>
        <View className="">
          <Image
            style={styles.routeIcon}
            source={require('../../assets/RouteIcon.png')}
            contentFit="cover"
            transition={1000}
            />
        </View>

        <View className="ml-1 w-50">
          <Text>{carpoolDetails.starterLocation}</Text>
          <Text className="mt-6" style={styles.destination}>{carpoolDetails.endLocation}</Text>
        </View>
      </View>
      
      <View className="flex flex-column justify-center">
        <Text className="ml-3 font-extrabold text-xl">{i18n.t('availableSeats')}</Text>
        <Text className="ml-5 text-xl">{carpoolDetails.details.availableSeats}</Text>
      </View>

      <View className="flex flex-column justify-center">
        <Text className="ml-3 font-extrabold text-xl">{i18n.t('driver')}</Text>
        {
          carpoolDetails.details.nameVisibility === 'true' ?
            <Text className="ml-3 mt-2">{carpoolDetails.details.driverName}</Text> :
            <Text className="ml-3 mt-2">{i18n.t('anonymous')}</Text> 
        }
      </View>

      <View className="items-center mt-5">
        <CustomButton
        backgroundColor="transparent"
        borderColor='#FF0000'
        textColor='#FF0000'
        title={i18n.t('cancel')}
        onPress={() => CancelApplication(navigation, carpoolDetails, carpoolDate, currentUser.currentUser.userId)}
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
  destination: {
    marginLeft: 0,
    maxWidth: 100
  },
  routeIcon: {
    flex: 1,
    width: 23,
    backgroundColor: 'transparent',
  },
});

export default ChosenCarpool;
