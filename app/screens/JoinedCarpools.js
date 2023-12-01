import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewCarpoolsScreen = () => {
    const [carpools, setCarpools] = useState({});

    const fetchCarpools = async () => {
        try {
            const storedCarpools = await AsyncStorage.getItem('carpoolsByDate');
            const parsedCarpools = storedCarpools ? JSON.parse(storedCarpools) : {};
            setCarpools(parsedCarpools);
        } catch (error) {
            console.error('Failed to fetch carpools', error);
        }
    };

    useEffect(() => {
        fetchCarpools();
    }, []);
    return (
      <ScrollView style={styles.container}>
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
      </ScrollView>
  );
  
};

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
});

export default ViewCarpoolsScreen;
