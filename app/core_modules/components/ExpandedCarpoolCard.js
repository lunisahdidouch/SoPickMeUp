import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BusFront from '../../assets/BusFront';
import ChevronRight from '../../assets/ChevronRight';
import ExtendRouteIcon from '../../assets/ExtendRouteIcon';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

const ExpandedCarpoolCard = ({ carpoolDate, carpoolDetails, screen }) => {
  generateBoxShadowStyle(-2, 4, 'black', 0.2, 3, 6, 'black');
  
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(`${screen}`, { carpoolDetails, carpoolDate });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.card, styles.boxShadow]} className="">
        <View style={styles.busIcon}>
          <BusFront width="67" height="67" color="#0070AD" />
        </View>
        <Text className="mr-1 max-w-[50] w-10 font-extrabold">{carpoolDetails.details.departureTime}</Text>
        <View>
            <ExtendRouteIcon width="30" height="90" color="transparent" color1="" color2="#D9D9D9" strokeColor="#686666" strokeColor1="#686666" strokeColor2="#686666" />
        </View>
        <View>
          <View style={styles.departureRow}>
            <View className="ml-1 w-16">
              <Text numberOfLines={1} ellipsizeMode='tail'  style={{ maxWidth: 100 }}>{carpoolDetails.starterLocation}</Text>
              <Text numberOfLines={1} ellipsizeMode='tail' className="mt-12" style={styles.destination}>{carpoolDetails.endLocation}</Text>
            </View>
            <View className="justify-center ml-12 ">
              <ChevronRight 
                color="transparent" 
                strokeColor={"#686666"} 
                width={45} 
                height={45}
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
    // borderWidth: 1,
    borderColor: '#000',
    borderRadius: 18,
    width: 350,
    height: 150,
    padding: 25,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  busIcon: {
    marginRight: 12,
    justifyContent: 'center',
  },
  departureRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  destination: {
    marginLeft: 0,
    maxWidth: 100
  },
});

export default ExpandedCarpoolCard;