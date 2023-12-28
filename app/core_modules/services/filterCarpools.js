import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useContext } from 'react';
import ExpandedCarpoolCard from '../components/ExpandedCarpoolCard';
import CarpoolCard from '../components/ExpandedCarpoolCard';
import UserContext from '../../user_modules/services/UserContext';


const FilterCreatedCarpools = ({carpools}) => {
  const currentUser = useContext(UserContext);
  const sortedCarpools = Object.entries(carpools).sort((a, b) => new Date(a[0]) - new Date(b[0]));

  return(
    <ScrollView className="mb-6 mt-20">
      {sortedCarpools.map(([date, carpoolsList]) => (
        <View key={date}>
          {carpoolsList.map((carpoolDetails, index) => {
            if (carpoolDetails.userId === currentUser.currentUser.userId) {
              return (
                <View key={`${carpoolDetails.date}-${index}`}>
                  <Text className="ml-9 mb-2 font-bold text-base">{date}</Text>
                  <View style={styles.container}>
                    <ExpandedCarpoolCard carpoolDetails={carpoolDetails} carpoolDate ={date} screen={"Carpool details"}/>
                  </View>
                </View>
              )}
          })}
        </View>
      ))}
    </ScrollView>
)};

const FilterJoinedCarpools = ({carpools}) => {
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
                    <ExpandedCarpoolCard carpoolDetails={carpoolDetails} carpoolDate ={date} screen={"Aangemelde carpools"} />
                  </View>
                </View>
              )} 
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