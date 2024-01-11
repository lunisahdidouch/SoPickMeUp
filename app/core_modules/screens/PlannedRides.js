import React, { useState, useEffect,  } from 'react';
import { View } from 'react-native';
import { fetchCarpools } from '../services/fetchCarpools';
import { ViewCarpools } from '../services/filterCarpools';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import RefreshableScrollView from '../components/RefreshableScrollView';
import i18n from '../data/Translations';

const PlannedRides = ({ route }) => {
    const [carpools, setCarpools] = useState({});
    const navigation = useNavigation();

    const refreshCarpools = async () => {
        const fetchedCarpools = await fetchCarpools();
        setCarpools(fetchedCarpools);
    }
    const handleCreateCarpoolPress = () => {
        navigation.navigate('Carpool aanmaken');
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
            <View className="items-center mt-5 mb-3">
                <CustomButton
                    title={i18n.t('createCarpool')}
                    backgroundColor="#0070AD"
                    borderColor='#0070AD'
                    textColor='white'
                    width={250}
                    height={70}
                    fontSize={18}
                    onPress={handleCreateCarpoolPress}
                />
            </View>
            <ViewCarpools
              carpools={carpools}
              fetchCarpools={refreshCarpools}
            />
        </RefreshableScrollView>

  );
};
export default PlannedRides;
