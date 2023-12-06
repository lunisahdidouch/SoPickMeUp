import { addToList } from '../utils/listUtil';
import { fetchCarpools } from './fetchCarpools';
import { saveCarpools } from './saveCarpools';

export const saveCarpool = async (newCarpool, newCarpoolDetails, departureDate) => {
    try {
  
      // const dateCarpools = existingCarpools[departureDate] || [];
      let savedCarpools = await fetchCarpools();
      console.log('First initialization- ' +savedCarpools);
      savedCarpools[departureDate] =  addToList(newCarpool, newCarpoolDetails, savedCarpools );
      console.log('Second initialization- ' +savedCarpools);
      await saveCarpools(savedCarpools);

      // dateCarpools.push({ ...newCarpool, details: newCarpoolDetails });
      // const wordt aangepast. Kijk naar map gebruiken.
      // kan als aparte utils functie gezien worden. nieuwe data + huidige data samenvoegen
  
      // savedCarpools[departureDate] = dateCarpools;
      

      // await AsyncStorage.setItem('carpoolsByDate', JSON.stringify(existingCarpools));
    } catch (error) {
      console.error('Failed to save the carpool', error);
    }
  };

  // functie heeft veel verantwoordelijkheden, kijk hier naar!