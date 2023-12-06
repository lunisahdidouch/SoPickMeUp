export const addToList = async (carpool, carpoolDetails, savedCarpools, departureDate) => {
    try {
      const dateCarpools = savedCarpools[departureDate] || [];
      dateCarpools.push({ ...carpool, details: carpoolDetails })
      console.log('Carpool added to list!');
      return dateCarpools;
    } catch (error) {
      console.error('Failed to add to list', error);
    }
  };