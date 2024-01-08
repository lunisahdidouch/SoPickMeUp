import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CarpoolCard from './CarpoolCard';
import { formatDate } from '../utils/dateToText';

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