import { StyleSheet, Text, View } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './app/screens/HomeScreen';
import CreatedCarpools from './app/screens/CreatedCarpools';
import JoinedCarpools from './app/screens/JoinedCarpools';
import BusFrontIcon from './app/assets/BusFront';
import SteeringWheelIcon from './app/assets/SteeringWheel';
import BusSideIcon from './app/assets/BusSide';




const Tab = createBottomTabNavigator();

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
      }} 
      />
      <Tab.Screen 
      name="Alle carpools" 
      component={HomeScreen} 
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <BusFrontIcon width={40} height={40} color={focused ? "#12B3DB" : "#0070AD"} />
        ),
      }}
      />
      <Tab.Screen 
      name="Meerijden" 
      component={JoinedCarpools} 
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <BusSideIcon width={50} height={50} color={focused ? "#12B3DB" : "#0070AD"} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const visibility = NavigationBar.useVisibility()
  return (
    <NavigationContainer>
      <MyTabs />
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
