import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import CustomButton from '../components/CustomButton';


const ChosenCarpool = ({ route }) => {
  const { carpoolDetails, carpoolDate } = route.params;

  return (
    <View className="mt-10 ml-3">
      <Text className="font-extrabold text-2xl mb-3 ">Overzicht</Text>
      <Text className="font-extrabold text-xl">{carpoolDate}</Text>


      <View style={styles.card}>
        <Text className="mr-1 max-w-[50] w-10 font-extrabold">{carpoolDetails.details.departureTime}</Text>
        <View style={styles.imageContainer} className="">
          <Image
            style={styles.routeIcon}
            source={require('../assets/RouteIcon.png')}
            // placeholder={blurhash}
            contentFit="cover"
            transition={1000}
            />
        </View>
        <View>
          <View>
            <View className="ml-1 w-16">
              <Text>{carpoolDetails.starterLocation}</Text>
              <Text className="mt-6" style={styles.destination}>{carpoolDetails.endLocation}</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="flex flex-column justify-center">
        <Text className="ml-3">Vrije plaatsen:</Text>
        <Text className="ml-14 text-dark_main font-bold text-xl">{carpoolDetails.details.availableSeats}</Text>
      </View>
      <View className="items-center mt-5">
            <CustomButton
            backgroundColor="transparent"
            borderColor='#0070AD'
            textColor='#0070AD'
            title="Maak carpool aan"
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
  imageContainer: {
    // flex: 1,
    // backgroundColor: 'transparent',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginRight: 10,
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
