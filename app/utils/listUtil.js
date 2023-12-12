export const addToList = (carpool, carpoolDetails, savedCarpools, departureDate) => {
    try {
      const dateCarpools = savedCarpools[departureDate] || [];
      dateCarpools.push({ ...carpool, details: carpoolDetails })
      console.log('Carpool added to list! ' + dateCarpools);

      return dateCarpools;
    } catch (error) {
      console.error('Failed to add to list', error);
    }
  };