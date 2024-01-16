import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BusFront from '../../assets/BusFront';
import ChevronRight from '../../assets/ChevronRight';
import { Image } from 'expo-image';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import i18n from '../data/Translations';

const generateBoxShadowStyle = (
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid,
) => {
  if (Platform.OS === 'ios') {
    styles.boxShadow = {
      shadowColor: shadowColorIos,
      shadowOffset: {width: xOffset, height: yOffset},
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === 'android') {
    styles.boxShadow = {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};

const CarpoolCard = ({ carpoolDate, carpoolDetails }) => {

  generateBoxShadowStyle(-2, 4, 'black', 0.2, 3, 6, 'black');
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Gekozen carpool', { carpoolDetails, carpoolDate });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.card, styles.boxShadow]} className="">
        <View style={styles.busIcon}>
          <BusFront width="52" height="52" color="#0070AD" />
        </View>
        <Text className="mr-1 max-w-[50] w-10 font-extrabold">{carpoolDetails.details.departureTime}</Text>
        <View>
          <Image
            style={styles.routeIcon}
            source={require('../../assets/RouteIcon.png')}
            contentFit="cover"
            transition={1000}
            />
        </View>
        <View>
          <View style={styles.departureRow}>
            <View className="ml-1 w-16">
              <Text numberOfLines={1} ellipsizeMode='tail'  style={{ maxWidth: 100 }}>{carpoolDetails.starterLocation}</Text>
              <Text numberOfLines={1} ellipsizeMode='tail' className="mt-6" style={styles.destination}>{carpoolDetails.endLocation}</Text>
            </View>
            <View className="flex flex-column justify-center">
              <Text className="ml-3">{i18n.t('freeSeats')}</Text>
              <Text className="ml-14 text-dark_main font-bold text-xl">{carpoolDetails.details.availableSeats}</Text>
            </View>
            <View className="justify-center">
              <ChevronRight 
                color="transparent" 
                strokeColor={"#686666"} 
                width={25} 
                height={25}
                />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 18,
    width: 350,
    height: 100,
    padding: 17,
    marginBottom: 20,
    backgroundColor: '#fff',
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

export default CarpoolCard;