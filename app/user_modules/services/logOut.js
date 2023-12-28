import AsyncStorage from '@react-native-async-storage/async-storage';


const handleLogout = async () => {
  await AsyncStorage.removeItem('currentUser');
};


export default handleLogout