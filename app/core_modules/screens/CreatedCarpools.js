import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { FilterCreatedCarpools } from '../services/filterCarpools';
import { fetchCarpools } from '../services/fetchCarpools';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';



const PlannedRides = () => {
    const [carpools, setCarpools] = useState({});
    const navigation = useNavigation();

    const refreshCarpools = async () => {
        const fetchedCarpools = await fetchCarpools();
        setCarpools(fetchedCarpools);
    }
    const handleCreateCarpoolPress = () => {
        navigation.navigate('Carpool aanmaken');
    };

    useEffect( () => {
        refreshCarpools();
    }, []);
    return (
        <View>
            <View className="items-center mt-5 mb-3 ml-2 absolute">
                <CustomButton
                    title="Refresh"
                    backgroundColor="transparent"
                    borderColor='#0070AD'
                    textColor='#0070AD'
                    width={60}
                    height={30}
                    onPress={refreshCarpools}
                />
            </View>
            <FilterCreatedCarpools
                carpools={carpools}
                fetchCarpools={refreshCarpools}
                />
        </View>

  );
};
export default PlannedRides;