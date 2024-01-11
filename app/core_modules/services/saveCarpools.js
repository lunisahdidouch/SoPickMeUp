import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveCarpools = async (carpoolToSave) => {
    try {
        await AsyncStorage.setItem('carpoolsByDate', JSON.stringify(carpoolToSave));
    } catch (error) {
        console.error('Failed to save the carpool', error);
    }
}