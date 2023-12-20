import { StyleSheet, Text, View } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import React from 'react';
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
import Background from './app/core_modules/components/BackgroundShapes';
import withBackground from './app/core_modules/components/ScreenWithBackground';
import User from './app/user_modules/models/User';
import CarpoolApplication from './app/core_modules/screens/CarpoolApplication';
import UserContext from './app/user_modules/services/UserContext';
// import DrawerMenu from './app/core_modules/components/Drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChangeLanguage from './app/core_modules/screens/ChangeLanguage';
import DrawerView from './app/core_modules/components/Drawer';
import EditCarpool from './app/core_modules/screens/EditCarpool';
import CreatedCarpoolDetails from './app/core_modules/screens/CreatedCarpoolDetails';

const Tab = createBottomTabNavigator();

const currentUser = new User('Lunis');
console.log(currentUser.name);
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();


// function AppDrawerStack() {
//   return (
//       <Drawer.Navigator drawerContent={props => <DrawerView {...props} />}>
//           <Drawer.Screen name='AppBottomStack' component={AppBottomStack} />
//       </Drawer.Navigator>
//   )

// }

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
      name="CarpoolDetails" 
      component={CarpoolApplication} />
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
  </Stack.Navigator>
  )
}

export default function App() {
  // const visibility = NavigationBar.useVisibility()
  return (
    <UserContext.Provider value={currentUser}>
      <NavigationContainer>
        <Drawer.Navigator 
          drawerContent={props => <DrawerView {...props}/>}   
          screenOptions={{ headerShown: false }}>
          <Drawer.Screen name="CarpoolStack" component={CarpoolStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
