import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import CarpoolCard from '../components/CarpoolCard';


const FilterCreatedCarpools = ({carpools}) => {
  console.log('1: Displayed carpools belong to User Id: ', carpools[1]);
    return(
        <ScrollView className="mb-6 mt-20">
          {Object.entries(carpools).map(([date, carpoolsList]) => (
            <View key={date}>
              {carpoolsList.map((carpoolDetails, index) => {
                {console.log('2: Displayed carpools belong to User Id: ', carpoolDetails.userId)}
                if (carpoolDetails.userId === 3) {
                  console.log('3: Displayed carpools belong to User Id: ', carpoolDetails.userId);
                  return (
                    <View key={`${carpoolDetails.date}-${index}`}>
                      <Text className="ml-9 mb-2 font-bold text-base">{date}</Text>
                      <View style={styles.container}>
                        <CarpoolCard carpoolDetails={carpoolDetails} carpoolDate ={date} />
                      </View>
                    </View>
                  )
                }
              })}
            </View>
          ))}
        </ScrollView>
)};

const FilterJoinedCarpools = ({carpools}) => {
  console.log('1: Displayed carpools belong to passenger Id: ', carpools[1]);
  return(
    <ScrollView className="mb-6 mt-20">
      {Object.entries(carpools).map(([date, carpoolsList]) => (
        <View key={date}>
          {carpoolsList.map((carpoolDetails, index) => {
            if (carpoolDetails.details.passengers && carpoolDetails.details.passengers.includes(7)) {
              return(
                <View key={`${date}-${index}`}>
                  <Text className="ml-9 mb-2 font-bold text-base">{date}</Text>
                  <View style={styles.container}>
                    <CarpoolCard carpoolDetails={carpoolDetails} carpoolDate ={date} />
                  </View>
                </View>
              )
            } 
          })}
        </View>
      ))}
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
  timeRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  departureRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    backgroundColor: 'transparent',
  },
});

export  {FilterCreatedCarpools, FilterJoinedCarpools};