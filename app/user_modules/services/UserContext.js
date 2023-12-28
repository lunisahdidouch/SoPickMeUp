import React from 'react';

const UserContext = React.createContext(null);

export default UserContext;

// import React, { createContext, useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     const checkCurrentUser = async () => {
//       try {
//         const storedUser = await AsyncStorage.getItem('currentUser');
//         if (storedUser) {
//           setCurrentUser(JSON.parse(storedUser));
//         }
//       } catch (error) {
//         console.error('Error fetching current user:', error);
//       }
//     };

//     checkCurrentUser();
//   }, []);

//   return (
//     <UserContext.Provider value={{ currentUser, setCurrentUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
