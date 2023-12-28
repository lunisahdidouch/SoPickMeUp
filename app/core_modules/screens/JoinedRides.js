import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { FilterJoinedCarpools } from '../services/filterCarpools';
import { fetchCarpools } from '../services/fetchCarpools';
import CustomButton from '../components/CustomButton';
import RefreshableScrollView from '../components/RefreshableScrollView';



const PlannedRides = () => {
    const [carpools, setCarpools] = useState({});

    const refreshCarpools = async () => {
        const fetchedCarpools = await fetchCarpools();
        setCarpools(fetchedCarpools);
    }

    useEffect( () => {
        refreshCarpools();
    }, []);
    return (
        <RefreshableScrollView onRefresh={refreshCarpools}>
            <FilterJoinedCarpools
                carpools={carpools}
                fetchCarpools={refreshCarpools}
                />
        </RefreshableScrollView>

  );
};
export default PlannedRides;
