import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Image } from 'expo-image';
import CustomButton from '../components/CustomButton';
import randomValue from '../utils/randomValue';
import { saveCarpool } from '../services/storageService';
import i18n from '../data/Translations';
import { useNavigation } from '@react-navigation/native';


const CancelApplication = async (navigation, carpoolDetails, carpoolDate) => {
  if (!carpoolDetails.details.passengers) {
    carpoolDetails.details.passengers = [];
  }
  const randomId = randomValue(6, 9);
  console.log("Random Id check: " +  randomId);
  carpoolDetails.details.passengers.push(randomId);
  saveCarpool(carpoolDetails, carpoolDetails.details, carpoolDate);
  Alert.alert(i18n.t('applicationCanceled'))
  navigation.goBack();
}


const ChosenCarpool = ({ route }) => {
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
            // placeholder={blurhash}
            contentFit="cover"
            transition={1000}
            />
        </View>
        <View>
          <View>
            <View className="ml-1 w-50">
              <Text>{carpoolDetails.starterLocation}</Text>
              <Text className="mt-6" style={styles.destination}>{carpoolDetails.endLocation}</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="flex flex-column justify-center">
        <Text className="ml-3 font-extrabold text-xl">{i18n.t('availableSeats')}</Text>
        <Text className="ml-5 text-xl">{carpoolDetails.details.availableSeats}</Text>
      </View>
      <View className="flex flex-column justify-center">
        <Text className="ml-3 font-extrabold text-xl">{i18n.t('driver')}</Text>
        <Text className="ml-3 mt-2">{carpoolDetails.details.driverName}</Text>
      </View>
      <View>
        {
          // carpoolDetails.details.passengers && Object.entries(carpoolDetails.details.passengers).length === 0 ? (
          //   <View>
          //     <Text>No passengers</Text>
          //   </View>
          //   ) : (
          //     carpoolDetails.details.passengers && Object.entries(carpoolDetails.details.passengers).map((passenger) => (
          //       <View key={passenger[0]}>
          //       <Text className="ml-3 font-extrabold text-xl">Passengers:</Text>
          //       <Text className="ml-3 mt-2">{passenger[1]}</Text>
          //     </View>
          //   ))
          //   )
          <View className="flex flex-column justify-center">
          <Text className="ml-3 font-extrabold text-xl">{i18n.t('passengers')}</Text>
          <Text className="ml-3 mt-2">{carpoolDetails.details.passengers}</Text>
        </View>
        }
      </View>
      <View className="items-center mt-5">
        <CustomButton
        backgroundColor="transparent"
        borderColor='#FF0000'
        textColor='#FF0000'
        title={i18n.t('cancel')}
        onPress={() => CancelApplication(navigation, carpoolDetails, carpoolDate)}
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

export default ChosenCarpool;
