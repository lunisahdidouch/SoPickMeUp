import React, { useState, useCallback } from 'react';
import { FilterJoinedCarpools } from '../services/filterCarpools';
import { fetchCarpools } from '../services/fetchCarpools';
import { useFocusEffect } from '@react-navigation/native';
import RefreshableScrollView from '../components/RefreshableScrollView';



const PlannedRides = () => {
    const [carpools, setCarpools] = useState({});

    const refreshCarpools = async () => {
        const fetchedCarpools = await fetchCarpools();
        setCarpools(fetchedCarpools);
    }


    useFocusEffect(
      useCallback(() => {
          refreshCarpools();
      }, [])
    );
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
