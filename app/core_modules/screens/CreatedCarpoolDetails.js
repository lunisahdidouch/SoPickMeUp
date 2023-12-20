// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Image } from 'expo-image';
// import CustomButton from '../components/CustomButton';
// import { useNavigation } from '@react-navigation/native';

// const navigation = useNavigation();

// const handlePress = () => {
//   navigation.navigate('Carpool aanpassen', { carpoolDetails, carpoolDate });
// };

// const ChosenCarpool = ({ route }) => {
//   const { carpoolDetails, carpoolDate } = route.params;
//   // console.log(carpoolDetails.details.passengers[0])
//   return (
//     <View className="mt-10 ml-3">
//       <Text className="font-extrabold text-2xl mb-3 ">Overzicht</Text>
//       <Text className="font-extrabold text-xl">{carpoolDate}</Text>


//       <View style={styles.card}>
//         <Text className="mr-1 max-w-[50] w-10 font-extrabold">{carpoolDetails.details.departureTime}</Text>
//         <View className="">
//           <Image
//             style={styles.routeIcon}
//             source={require('../../assets/RouteIcon.png')}
//             // placeholder={blurhash}
//             contentFit="cover"
//             transition={1000}
//             />
//         </View>
//         <View>
//           <View>
//             <View className="ml-1 w-50">
//               <Text>{carpoolDetails.starterLocation}</Text>
//               <Text className="mt-6" style={styles.destination}>{carpoolDetails.endLocation}</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//       <View className="flex flex-column justify-center">
//         <Text className="ml-3 font-extrabold text-xl">Vrije plaatsen:</Text>
//         <Text className="ml-5 text-xl">{carpoolDetails.details.availableSeats}</Text>
//       </View>
//       <View className="flex flex-column justify-center">
//         <Text className="ml-3 font-extrabold text-xl">Chauffeur:</Text>
//         <Text className="ml-3 mt-2">{carpoolDetails.details.driverName}</Text>
//       </View>
//       <View>
//         {
//           carpoolDetails.passengers && Object.entries(carpoolDetails.passengers).length === 0 ? (
//             <View>
//               <Text>No passengers</Text>
//             </View>
//             ) : (
//               carpoolDetails.passengers && Object.entries(carpoolDetails.passengers).map((passenger) => (
//                 <View key={passenger[0]}>
//                 <Text className="ml-3 font-extrabold text-xl">Passengers:</Text>
//                 <Text className="ml-3 mt-2">{passenger[1]}</Text>
//               </View>
//             ))
//             )
            
//         }
//         </View>

//       <View className="flex flex-column justify-center">
//         <Text className="ml-3 font-extrabold text-xl">Opmerking:</Text>
//         <Text className="ml-3 mt-2">{carpoolDetails.details.passengers}</Text>
//       </View>
//       <View className="items-center mt-5">
//             <CustomButton
//             backgroundColor="transparent"
//             borderColor='#0070AD'
//             textColor='#0070AD'
//             title="Carpool aanpassen"
//             onPress={handlePress}
//             />
//           </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     display: 'flex',
//     flexDirection: 'row',
//     width: 350,
//     height: 100,
//     padding: 17,
//     marginBottom: 20,
//   },
//   busIcon: {
//     marginRight: 12,
//     justifyContent: 'center',
//   },
//   timeRow: {
//     display: 'flex',
//     flexDirection: 'row',
//   },
//   departureRow: {
//     display: 'flex',
//     flexDirection: 'row',
//   },
//   destination: {
//     marginLeft: 0,
//     maxWidth: 100
//   },
//   routeIcon: {
//     flex: 1,
//     width: 23,
//     backgroundColor: 'transparent',
//   },
//   chevronRight: {
//     marginTop: 20,
//   }
// });

// export default ChosenCarpool;

import { View, Text } from 'react-native'
import React from 'react'

const CreatedCarpoolDetails = () => {
  return (
    <View>
      <Text>CreatedCarpoolDetails</Text>
    </View>
  )
}

export default CreatedCarpoolDetails