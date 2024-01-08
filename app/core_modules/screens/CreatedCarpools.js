import React, { useState, useCallback, useEffect } from 'react';
import { FilterCreatedCarpools } from '../services/filterCarpools';
import { fetchCarpools } from '../services/fetchCarpools';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import RefreshableScrollView from '../components/RefreshableScrollView';



const CreatedCarpools = ({ route }) => {
  let shouldRefresh;

 

  const [carpools, setCarpools] = useState({});
  // const [refresh, setRefresh] = useState(shouldRefresh);
  // const [doRefresh, setDoRefresh] = useState(refresh);
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
    console.log('shouldRefresh: ' + shouldRefresh);
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
