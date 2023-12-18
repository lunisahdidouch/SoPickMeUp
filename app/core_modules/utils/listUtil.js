export const addToList = (carpool, carpoolDetails, savedCarpools, departureDate) => {
  try {
    let dateCarpools = savedCarpools[departureDate] || [];
    const existingCarpoolIndex = dateCarpools.findIndex(c => c.carpoolId === carpool.carpoolId);

    if (existingCarpoolIndex !== -1) {
      dateCarpools[existingCarpoolIndex] = { ...carpool, details: carpoolDetails };
    } else {
      dateCarpools.push({ ...carpool, details: carpoolDetails });
    }    
    return dateCarpools;
  } catch (error) {
    console.error('Failed to add to list', error);
  }
};