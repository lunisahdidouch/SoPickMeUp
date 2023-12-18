import { addToList } from '../utils/listUtil';
import { fetchCarpools } from './fetchCarpools';
import { saveCarpools } from './saveCarpools';

export const saveCarpool = async (newCarpool, newCarpoolDetails, departureDate) => {
    try {
  
      let savedCarpools = await fetchCarpools();
      // console.log(newCarpoolDetails);
      savedCarpools[departureDate] =  addToList(newCarpool, newCarpoolDetails, savedCarpools, departureDate );
      await saveCarpools(savedCarpools);
    } catch (error) {
      console.error('Failed to save the carpool', error);
    }
  };
