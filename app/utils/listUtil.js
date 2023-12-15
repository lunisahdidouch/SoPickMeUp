export const addToList = (carpool, carpoolDetails, savedCarpools, departureDate) => {
  try {
    let dateCarpools = savedCarpools[departureDate] || [];
    const existingCarpoolIndex = dateCarpools.findIndex(c => c.carpoolId === carpool.carpoolId);

    if (existingCarpoolIndex !== -1) {
      // Replace the existing carpool with the new one
      dateCarpools[existingCarpoolIndex] = { ...carpool, details: carpoolDetails };
    } else {
      // Add the new carpool to the list
      dateCarpools.push({ ...carpool, details: carpoolDetails });
    }
    console.log('Carpool added to list! ' + dateCarpools);
    
    return dateCarpools;
  } catch (error) {
    console.error('Failed to add to list', error);
  }
};