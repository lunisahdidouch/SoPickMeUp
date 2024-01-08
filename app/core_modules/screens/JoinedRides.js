import React, { useState, useEffect } from 'react';
import { FilterJoinedCarpools } from '../services/filterCarpools';
import { fetchCarpools } from '../services/fetchCarpools';
import RefreshableScrollView from '../components/RefreshableScrollView';



const PlannedRides = ({ route }) => {
    const [carpools, setCarpools] = useState({});

    const refreshCarpools = async () => {
        const fetchedCarpools = await fetchCarpools();
        setCarpools(fetchedCarpools);
    }
    if(route.params?.shouldRefresh === true) {
      shouldRefresh = route.params.shouldRefresh;
      refreshCarpools();
      route.params.shouldRefresh = false
      console.log('shouldRefresh: ' + shouldRefresh);
    } else {
      shouldRefresh = false;
    }

    useEffect(() => {
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
