import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Image } from 'expo-image';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import i18n from '../data/Translations';
import { deleteCarpool } from '../services/deleteCarpool';

const deletion = async (carpoolId, carpoolDate, navigation) => {
  await deleteCarpool(carpoolId, carpoolDate);
  Alert.alert(i18n.t('carpoolDeleted'))
  navigation.goBack();
}

const CreatedCarpoolDetails = ({ route }) => {
  const { carpoolDetails, carpoolDate } = route.params;

  const navigation = useNavigation();
  
  const handleCreateCarpoolPress = (screen) => {
    navigation.navigate(screen, {carpoolDetails, carpoolDate});
  };

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
        <Text className="ml-3 font-extrabold text-xl">{i18n.t('availableSeats')}:</Text>
        <Text className="ml-5 text-xl">{carpoolDetails.details.availableSeats}</Text>
      </View>
      <View className="flex flex-column justify-center">
        <Text className="ml-3 font-extrabold text-xl">{i18n.t('driver')}:</Text>
        <Text className="ml-3 mt-2">{carpoolDetails.details.driverName}</Text>
      </View>
      {/* <View className="flex flex-column justify-center">
        <Text className="ml-3 font-extrabold text-xl">{i18n.t('passengers')}:</Text>
        <Text className="ml-3 mt-2">{carpoolDetails.details.passengers}</Text>
      </View> */}
      <View className="flex flex-column justify-center">
        <Text className="ml-3 font-extrabold text-xl">{i18n.t('comment')}:</Text>
        <Text className="ml-3 mt-2">{carpoolDetails.details.comment}</Text>
      </View>
      <View className="items-center mt-5">
            <CustomButton
            backgroundColor="transparent"
            borderColor='#0070AD'
            textColor='#0070AD'
            title={i18n.t('edit')}
            onPress={() => handleCreateCarpoolPress('Carpool aanpassen')}
            />
      </View>
      <View className="items-center mt-5">
            <CustomButton
            backgroundColor="transparent"
            borderColor='#FF0000'
            textColor='#FF0000'
            title={i18n.t('delete')}
            onPress={() => deletion(carpoolDetails.carpoolId, carpoolDate, navigation)}
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

export default CreatedCarpoolDetails;
