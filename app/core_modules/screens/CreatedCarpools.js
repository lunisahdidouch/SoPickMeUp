import React, { useState, useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { FilterCreatedCarpools } from '../services/filterCarpools';
import { fetchCarpools } from '../services/fetchCarpools';
import { useNavigation } from '@react-navigation/native';
import RefreshableScrollView from '../components/RefreshableScrollView';
import UserContext from '../../user_modules/services/UserContext';



const CreatedCarpools = () => {
    const [carpools, setCarpools] = useState({});
    const navigation = useNavigation();
    const currentUser = useContext(UserContext);

    const refreshCarpools = async () => {
        const fetchedCarpools = await fetchCarpools();
        setCarpools(fetchedCarpools);
    }
    const handleCreateCarpoolPress = () => {
        navigation.navigate('Carpool aanpassen', { carpoolDetails, carpoolDate });
    };

    useEffect( () => {
        refreshCarpools();
    }, []);
    return (
        <RefreshableScrollView onRefresh={refreshCarpools}>
            {/* <View>
              <Text>Current user: {currentUser.currentUser.name}</Text>
            </View> */}
            <FilterCreatedCarpools
              carpools={carpools}
              fetchCarpools={handleCreateCarpoolPress}
            />
        </RefreshableScrollView>

  );
};
export default CreatedCarpools;
