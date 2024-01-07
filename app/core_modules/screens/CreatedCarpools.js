import React, { useState, useCallback } from 'react';
import { FilterCreatedCarpools } from '../services/filterCarpools';
import { fetchCarpools } from '../services/fetchCarpools';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import RefreshableScrollView from '../components/RefreshableScrollView';



const CreatedCarpools = () => {
  const [carpools, setCarpools] = useState({});
  const navigation = useNavigation();

  const refreshCarpools = async () => {
      const fetchedCarpools = await fetchCarpools();
      setCarpools(fetchedCarpools);
  }
  const handleCreateCarpoolPress = () => {
      navigation.navigate('Carpool aanpassen', { carpoolDetails, carpoolDate });
  };

  useFocusEffect(
    useCallback(() => {
        refreshCarpools();
    }, [])
  );

  return (
      <RefreshableScrollView onRefresh={refreshCarpools}>
          <FilterCreatedCarpools
            carpools={carpools}
            fetchCarpools={handleCreateCarpoolPress}
          />
      </RefreshableScrollView>

  );
};
export default CreatedCarpools;
