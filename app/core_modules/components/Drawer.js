import React from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import ProfileIcon from '../../assets/ProfileIcon';
import Cross from '../../assets/Cross';

export default function DrawerView({ navigation }) {
  return (
    <DrawerContentScrollView>
      <Pressable className="items-end mr-2" onPress={() => navigation.closeDrawer()}>
        {/* <Text>Custom Header</Text> */}
        <Cross color={"#0070AD"} width={60} height={60}/>
      </Pressable>
      <View className="ml-2 mt-4 flex-row">
        <ProfileIcon strokeColor={"#686666"} width={65} height={65} color="transparent"/>
        <Text className="mt-5 ml-3 text-[20px]">Placeholder Name</Text>
      </View>
      <DrawerItem
        label="Taal"
        onPress={() => navigation.navigate('Home')}
      />
      <DrawerItem
        label="Feedback"
        onPress={() => navigation.navigate('Home')}
      />
    </DrawerContentScrollView>
  );
}

