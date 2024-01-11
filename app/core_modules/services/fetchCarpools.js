import AsyncStorage from '@react-native-async-storage/async-storage'

export const fetchCarpools = async () => {
    try {
        const savedCarpools = JSON.parse(await AsyncStorage.getItem('carpoolsByDate')) || {};
        return savedCarpools;
    } catch (error) {
        console.error('Failed to fetch the carpool', error);
    }
}