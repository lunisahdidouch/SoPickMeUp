import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useContext } from 'react';
import ExpandedCarpoolCard from '../components/ExpandedCarpoolCard';
import { formatDate } from '../utils/dateToText';
import UserContext from '../../user_modules/services/UserContext';
import CarpoolCard from '../components/CarpoolCard';

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
                  <Text className="ml-9 mb-2 font-bold text-base">{formatDate(date)}</Text>
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
  const currentUser = useContext(UserContext);
  const sortedCarpools = Object.entries(carpools).sort((a, b) => new Date(a[0]) - new Date(b[0]));
  return(
    <ScrollView className="mb-6 mt-20">
      {sortedCarpools.map(([date, carpoolsList]) => (
        <View key={date}>
          {carpoolsList.map((carpoolDetails, index) => {
            if (carpoolDetails.details.passengers && carpoolDetails.details.passengers.includes(currentUser.currentUser.userId)) {
              return(
                <View key={`${date}-${index}`}>
                  <Text className="ml-9 mb-2 font-bold text-base">{formatDate(date)}</Text>
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

const ViewCarpools = ({carpools}) => {
  const sortedCarpools = Object.entries(carpools).sort((a, b) => new Date(a[0]) - new Date(b[0]));
    return(
      <ScrollView className="mb-6">
        {sortedCarpools.map(([date, carpoolsList]) => (
          <View key={date}>
            <Text className="ml-9 mb-2 font-bold text-base">{formatDate(date)}</Text>
            {carpoolsList.map((carpoolDetails, index) => (
              <View key={`${carpoolDetails.date}-${index}`} style={styles.container}>
                <CarpoolCard carpoolDetails={carpoolDetails} carpoolDate ={date} />
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
)};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export  {FilterCreatedCarpools, FilterJoinedCarpools, ViewCarpools};