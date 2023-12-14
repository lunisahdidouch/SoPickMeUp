import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import CarpoolCard from './CarpoolCard';
import BusFront from '../assets/BusFront';
import { Image } from 'expo-image';
import { TouchableOpacity } from 'react-native';

const ViewCarpools = ({carpools, fetchCarpools}) => {

    return(
        <ScrollView>
          {Object.entries(carpools).map(([date, carpoolsList]) => (
            // console.log(carpoolsList),
            // console.log(carpools),
            <View key={date}>
              <Text className="ml-9 mb-2 font-bold text-base">{date}</Text>
              {carpoolsList.map((carpoolDetails, index) => (
                <View key={`${carpoolDetails.date}-${index}`} style={styles.container}>
                  {/* <CarpoolCard carpoolDetails={carpoolDetails} />*/}
                  <TouchableOpacity>
                    <View style={styles.card}>
                      <View style={styles.busIcon}>
                        <BusFront width="52" height="52" color="#0070AD" />
                      </View>
                      <Text className="mr-2">{carpoolDetails.details.departureTime}</Text>
                      <View style={styles.imageContainer} className="mr-2">
                        <Image
                          style={styles.routeIcon}
                          source={require('../assets/RouteIcon.png')}
                          // placeholder={blurhash}
                          contentFit="cover"
                          transition={1000}
                          />
                      </View>
                      <View style={styles.carpoolDetails}>
                        <View style={styles.departureRow}>
                          <View className="ml-1">
                              <Text className="">{carpoolDetails.starterLocation}</Text>
                            <Text className="mt-6" style={styles.destination}>{carpoolDetails.endLocation}</Text>
                          </View>
                          <View className="flex flex-column justify-center">
                            <Text className="ml-4">Vrije plaatsen:</Text>
                            <Text className="ml-14 text-blue-600 font-bold text-xl">{carpoolDetails.details.availableSeats}</Text>
                          </View>
                          <Text className="text-2xl mt-4 ml-1 font-bold">{'>'} </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ))}
          <Button title="Refresh carpools" onPress={fetchCarpools} />
        </ScrollView>
)};

const styles = StyleSheet.create({
   container: {
    alignItems: 'center',
   },
   card: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 18,
    width: 350,
    height: 100,
    padding: 15,
    marginBottom: 10,
  },
  busIcon: {
    marginRight: 12,
    justifyContent: 'center',
  },
  carpoolDetails: {
    // marginLeft: 10,
  },
  timeRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  departureRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  destination: {
    // marginLeft: 37,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  routeIcon: {
    flex: 1,
    width: 23,
    // height: ,
    backgroundColor: 'transparent',
  },
});

export default ViewCarpools;