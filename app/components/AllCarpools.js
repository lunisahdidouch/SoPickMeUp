import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
// import { fetchCarpools } from '../services/fetchCarpools';

const ViewCarpools = ({carpools, fetchCarpools}) => {
    return(
        <ScrollView>
        {Object.entries(carpools).map(([date, carpoolsList]) => (
            <View key={date}>
                <Text>{date}</Text>
                {carpoolsList.map((carpoolDetails, index) => (
                    <Text key={index}>
                        {carpoolDetails.starterLocation} to {carpoolDetails.endLocation}
                    </Text>
                ))}
            </View>
        ))}
        <Button title="Refresh carpools" onPress={fetchCarpools} />
        </ScrollView>
)};

const styles = StyleSheet.create({
   
});

export default ViewCarpools;