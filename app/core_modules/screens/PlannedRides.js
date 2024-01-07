import React, { useState, useCallback,  } from 'react';
import { View } from 'react-native';
import ViewCarpools from '../components/AllCarpools';
import { fetchCarpools } from '../services/fetchCarpools';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import RefreshableScrollView from '../components/RefreshableScrollView';
import i18n from '../data/Translations';



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

    useFocusEffect(
      useCallback(() => {
          refreshCarpools();
      }, [])
    );
    return (
        <RefreshableScrollView onRefresh={refreshCarpools}>
            <View className="items-center mt-5 mb-3">
                <CustomButton
                    title={i18n.t('createCarpool')}
                    backgroundColor="transparent"
                    borderColor='#0070AD'
                    textColor='#0070AD'
                    width={200}
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
