import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import ViewCarpools from '../components/AllCarpools';
import { fetchCarpools } from '../services/fetchCarpools';
import { useNavigation } from '@react-navigation/native';



const ViewCarpoolsScreen = () => {
    const [carpools, setCarpools] = useState({});
    const navigation = useNavigation();

    const refreshCarpools = async () => {
        const fetchedCarpools = await fetchCarpools();
        setCarpools(fetchedCarpools);
        console.log(fetchedCarpools);
    }
    const handleCreateCarpoolPress = () => {
        navigation.navigate('Alle carpools');
    };

    useEffect( () => {
        refreshCarpools();
    }, []);
    return (
        <View>
            <Button
            title="Create Carpool"
            onPress={handleCreateCarpoolPress}
            />
            <ViewCarpools
                carpools={carpools}
                fetchCarpools={refreshCarpools}
                />
        </View>

  );
};
export default ViewCarpoolsScreen;
