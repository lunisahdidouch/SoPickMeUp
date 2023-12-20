import { fetchCarpools } from './fetchCarpools';
import { saveCarpools } from './saveCarpools';

export const deleteCarpool = async (carpoolId, departureDate) => {
  try {
      let savedCarpools = await fetchCarpools();
          const carpoolIndex = savedCarpools[departureDate].findIndex(c => c.carpoolId === carpoolId);
          if (carpoolIndex !== -1) {
              savedCarpools[departureDate].splice(carpoolIndex, 1);
              if (savedCarpools[departureDate].length === 0) {
                  delete savedCarpools[departureDate];
              }
          }
          await saveCarpools(savedCarpools);
  } catch (error) {
      console.error('Failed to delete the carpool', error);
  }
};
