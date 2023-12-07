import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveCarpool = async (newCarpool, newCarpoolDetails, departureDate) => {
    try {
      const existingCarpools = JSON.parse(await AsyncStorage.getItem('carpoolsByDate')) || {};
  
      const dateCarpools = existingCarpools[departureDate] || [];
      dateCarpools.push({ ...newCarpool, details: newCarpoolDetails });
      // const wordt aangepast. Kijk naar map gebruiken.
      // kan als aparte utils functie gezien worden. nieuwe data + huidige data samenvoegen
  
      existingCarpools[departureDate] = dateCarpools;
      
      await AsyncStorage.setItem('carpoolsByDate', JSON.stringify(existingCarpools));
  
      console.log('Carpool saved!');
    } catch (error) {
      console.error('Failed to save the carpool', error);
    }
  };

  // functie heeft veel verantwoordelijkheden, kijk hier naar!