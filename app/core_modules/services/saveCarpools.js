import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveCarpools = async (carpoolToSave) => {
    try {
        await AsyncStorage.setItem('carpoolsByDate', JSON.stringify(carpoolToSave));
        console.log('Carpool saved!');        
    } catch (error) {
        console.error('Failed to save the carpool', error);
    }
}