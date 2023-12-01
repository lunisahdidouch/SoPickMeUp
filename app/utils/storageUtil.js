import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveCarpool = async (newCarpool, newCarpoolDetails, departureDate) => {
    try {
      const existingCarpools = JSON.parse(await AsyncStorage.getItem('carpoolsByDate')) || {};
  
      const dateCarpools = existingCarpools[departureDate] || [];
      dateCarpools.push({ ...newCarpool, details: newCarpoolDetails });
  
      existingCarpools[departureDate] = dateCarpools;
  
      await AsyncStorage.setItem('carpoolsByDate', JSON.stringify(existingCarpools));
  
      console.log('Carpool saved successfully!');
      console.log(existingCarpools);
    } catch (error) {
      console.error('Failed to save the carpool', error);
    }
  };
  