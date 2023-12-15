import { StyleSheet, Text, View } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './app/screens/HomeScreen';
import CreatedCarpools from './app/screens/CreatedCarpools';
import JoinedCarpools from './app/screens/JoinedCarpools';
import BusFrontIcon from './app/assets/BusFront';
import SteeringWheelIcon from './app/assets/SteeringWheel';
import { createStackNavigator } from '@react-navigation/stack';
import BusSideIcon from './app/assets/BusSide';
import CustomHeader from './app/components/CustomHeader';
import Background from './app/components/BackgroundShapes';
import withBackground from './app/components/ScreenWithBackground';
import User from './app/models/User';
import CarpoolApplication from './app/screens/CarpoolApplication';


const Tab = createBottomTabNavigator();

const currentUser = new User('Lunis');
console.log(currentUser.userId);
const Stack = createStackNavigator();




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
      header: () => <CustomHeader />,
    }}
    >
      <Tab.Screen 
      name="Mijn carpools" 
      // component={withBackground(CreatedCarpools)}
      component={CreatedCarpools}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <SteeringWheelIcon width={40} height={40} color = {focused ? "#12B3DB" : "#0070AD"} />
          ),
      }} 
      />
      <Tab.Screen 
      name="Alle carpools"
      // component={withBackground(HomeScreen)} 
      component={HomeScreen} 
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <BusFrontIcon width={40} height={40} color={focused ? "#12B3DB" : "#0070AD"} />
        ),
      }}
      />
      <Tab.Screen 
      name="Meerijden" 
      // component={withBackground(JoinedCarpools)} 
      component= {JoinedCarpools}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <BusSideIcon width={50} height={50} color={focused ? "#12B3DB" : "#0070AD"} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={MyTabs} />
//       <Stack.Screen name="CarpoolDetails" component={CarpoolApplication} />
//     </Stack.Navigator>
//   );
// }


export default function App() {
  // const visibility = NavigationBar.useVisibility()
  return (
    <NavigationContainer>
      {/* <MyStack /> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs}
          options={{ headerShown: false }}
          />
        <Stack.Screen name="CarpoolDetails" component={CarpoolApplication} />
      </Stack.Navigator>
    </NavigationContainer>
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

export { currentUser }
