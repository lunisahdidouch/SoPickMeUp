import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import CarpoolCard from './CarpoolCard';

// import { fetchCarpools } from '../services/fetchCarpools';

const ViewCarpools = ({carpools, fetchCarpools}) => {
    return(
        <ScrollView>
        {Object.entries(carpools).map(([date, carpoolsList]) => (
            <View key={date}>
                <Text>{date}</Text>
                {carpoolsList.map((carpoolDetails, index) => (
                  // console.log("1: " + carpoolDetails.details.availableSeats),
                  // console.log("2: " + carpoolDetails.details.returningRide),
                  // console.log("3: " + carpoolDetails.details.departureTime),
                  //   <Text key={index}>
                  //       Departure time: {carpoolDetails.details.departureTime} 
                  //       {carpoolDetails.starterLocation} to {carpoolDetails.endLocation}
                  //       Returning ride: {carpoolDetails.details.returningRide}
                  //       Available Seats: {carpoolDetails.details.availableSeats}

                  //   </Text>
                  <View style={styles.container}>
                    <CarpoolCard key={index} carpoolDetails={carpoolDetails} />
                  </View>
                )
                )}
            </View>
        ))}
        <Button title="Refresh carpools" onPress={fetchCarpools} />
        </ScrollView>

)};

const styles = StyleSheet.create({
   container: {
    alignItems: 'center',
   }
});

export default ViewCarpools;