import React, { useEffect, useState, useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CreateCarpool from './app/core_modules/screens/CreateCarpool';
import CreatedCarpools from './app/core_modules/screens/CreatedCarpools';
import PlannedRides from './app/core_modules/screens/PlannedRides';
import JoinedRides from './app/core_modules/screens/JoinedRides';
import BusFrontIcon from './app/assets/BusFront';
import SteeringWheelIcon from './app/assets/SteeringWheel';
import { createStackNavigator } from '@react-navigation/stack';
import BusSideIcon from './app/assets/BusSide';
import CustomHeader from './app/core_modules/components/CustomHeader';
import CarpoolApplication from './app/core_modules/screens/CarpoolApplication';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerView from './app/core_modules/components/Drawer';
import EditCarpool from './app/core_modules/screens/EditCarpool';
import CreatedCarpoolDetails from './app/core_modules/screens/CreatedCarpoolDetails';
import ToBeJoinedCarpool from './app/core_modules/screens/ToBeJoinedCarpool';
import ApplyToCarpool from './app/core_modules/screens/ApplyToCarpool';
import LoginScreen from './app/user_modules/screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sampleUsers from './app/user_modules/data/sampleUsers';
import handleLogout from './app/user_modules/services/logOut';
import UserContext from './app/user_modules/services/UserContext';


const initializeUsers = async () => {
  try {
    const existingUsers = await AsyncStorage.getItem('users');
    if (!existingUsers) {
      await AsyncStorage.setItem('users', JSON.stringify(sampleUsers));
      console.log('Users initialized!');
    } else {
      console.log('Users already exist');
    }
  } catch (error) {
    console.error('Error initializing users:', error);
  }
};


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#12B3DB',
      tabBarInactiveTintColor: '#000000',
      tabBarStyle: {
        height: 80,
        borderTopWidth: 2,
        borderTopColor: '#12B3DB', 
      },
      tabBarLabelStyle: {
        fontSize: 16,
        marginBottom: 3,
      },
    }}
    >
      <Tab.Screen 
      name="Mijn carpools" 
      component={CreatedCarpools}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <SteeringWheelIcon width={40} height={40} color = {focused ? "#12B3DB" : "#0070AD"} />
          ),
        header: () => <CustomHeader name = "Mijn carpools" showHamburger={true}/>,
      }} 
      />
      <Tab.Screen 
      name="Alle carpools"
      component={PlannedRides} 
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <BusFrontIcon width={40} height={40} color={focused ? "#12B3DB" : "#0070AD"} />
        ),
        header: () => <CustomHeader name = "Alle carpools" showHamburger={true}/>,
      }}
      />
      <Tab.Screen 
      name="Meerijden" 
      component= {JoinedRides}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <BusSideIcon width={50} height={50} color={focused ? "#12B3DB" : "#0070AD"} />
        ),
        header: () => <CustomHeader name = "Meerijden" showHamburger={true}/>,
      }}
      />
    </Tab.Navigator>
  );
}

function CarpoolStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={MyTabs}
      options={{ headerShown: false }}
      />
    <Stack.Screen 
      name="Aangemelde carpools" 
      component={CarpoolApplication} 
      options={{
        header: (props) => <CustomHeader {...props} name = "Carpool aanmelding" showHamburger={false} />,
      }}
      />
    <Stack.Screen 
      name="Carpool aanmaken" 
      component={CreateCarpool}
      options={{
        header: (props) => <CustomHeader {...props} name = "Carpool aanmaken" showHamburger={false} />,
      }}          
      />
      <Stack.Screen
      name="Carpool aanpassen"
      component={EditCarpool}
      options={{
        header: (props) => <CustomHeader {...props} name = "Carpool aanpassen" showHamburger={false} />,
      }}
      />
      <Stack.Screen
      name="Carpool details"
      component={CreatedCarpoolDetails}
      options={{
        header: (props) => <CustomHeader {...props} name = "Carpool details" showHamburger={false} />,
      }}
      />
      <Stack.Screen
      name="Gekozen carpool"
      component={ToBeJoinedCarpool}
      options={{
        header: (props) => <CustomHeader {...props} name = "Gekozen carpool" showHamburger={false} />,
      }}
      />
      <Stack.Screen
      name="Aanvragen"
      component={ApplyToCarpool}
      options={{
        header: (props) => <CustomHeader {...props} name = "Carpool aanmelding" showHamburger={false} />,
      }}
      />
  </Stack.Navigator>
  )
}

function MainScreens() {
  return (
        <Drawer.Navigator 
          drawerContent={props => <DrawerView {...props}/>}   
          screenOptions={{ headerShown: false }}>
          <Drawer.Screen name="CarpoolStack" component={CarpoolStack} />
        </Drawer.Navigator>
  );
}



export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const MainAppScreens = () => {
    // checkCurrentUser();

    if (!currentUser) {
      return <LoginScreen />;
    }
  
    return (
        <UserContext.Provider value={{ currentUser }}>
          <MainScreens />
        </UserContext.Provider>
    );
  };

  useEffect(() => {
    // handleLogout();
    initializeUsers();
    checkCurrentUser();
  }, []);
  
  const checkCurrentUser = async () => {
    try {
      const userString = await AsyncStorage.getItem('currentUser');
      // console.log("1")

      // console.log("1")
      if (userString) {
        setCurrentUser(JSON.parse(userString));
      }
    } catch (error) {
      console.error('Error fetching current user:', error);
    }
  };
  return (
    // <UserContext.Provider value={{ currentUser }}>
      <NavigationContainer>
        <MainAppScreens/>
      </NavigationContainer>
    // </UserContext.Provider>
  );  
}
