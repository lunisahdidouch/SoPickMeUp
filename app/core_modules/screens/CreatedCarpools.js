import React, { useState, useEffect } from 'react';
import { FilterCreatedCarpools } from '../services/filterCarpools';
import { fetchCarpools } from '../services/fetchCarpools';
import { useNavigation } from '@react-navigation/native';
import RefreshableScrollView from '../components/RefreshableScrollView';

const CreatedCarpools = ({ route }) => {
  let shouldRefresh;
  const [carpools, setCarpools] = useState({});
  const navigation = useNavigation();

  const refreshCarpools = async () => {
      const fetchedCarpools = await fetchCarpools();
      setCarpools(fetchedCarpools);
  }
  const handleCreateCarpoolPress = () => {
      navigation.navigate('Carpool aanpassen', { carpoolDetails, carpoolDate });
  };
  if(route.params?.shouldRefresh === true) {
    shouldRefresh = route.params.shouldRefresh;
    refreshCarpools();
    route.params.shouldRefresh = false
  } else {
    shouldRefresh = false;
  }

  useEffect(() => {
    refreshCarpools();
  }, []);
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
