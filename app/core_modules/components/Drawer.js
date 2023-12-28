import React, { useContext } from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import ProfileIcon from '../../assets/ProfileIcon';
import Globe from '../../assets/Globe';
import InformationIcon from '../../assets/InformationIcon';
import LogoutIcon from '../../assets/LogoutIcon';
import Cross from '../../assets/Cross';
import handleLogout from '../../user_modules/services/logOut';
import * as Updates from 'expo-updates';
import UserContext from '../../user_modules/services/UserContext';
import { G } from 'react-native-svg';

const logOut = async () => {
  await handleLogout();
  Updates.reloadAsync();
};
export default function DrawerView({ navigation }) {
  const currentUser = useContext(UserContext);

  return (
    <DrawerContentScrollView>
      <Pressable className="items-end mr-2" onPress={() => navigation.closeDrawer()}>
        {/* <Text>Custom Header</Text> */}
        <Cross color={"#0070AD"} width={60} height={60}/>
      </Pressable>
      <View className="ml-2 mt-4 mb-10 flex-row">
        <ProfileIcon strokeColor={"#686666"} width={65} height={65} color="transparent"/>
        <Text className="mt-5 ml-3 text-[20px]">{currentUser.currentUser.name}</Text>
      </View>


      <View className="ml-3">
        <View className="flex-row mb-4 pb-3 border-b-[1px]">
          <View className="">
            <Globe width={60} height={60} color="transparent" strokeColor="#0070AD"/>
          </View>
          <View className="ml-4 mt-3">
              <Text className="text-[20px]">Taal</Text>
          </View>
        </View>

        <View className="flex-row mb-4 pb-3 border-b-[1px]">
          <InformationIcon width={60} height={60} color="transparent" strokeColor="#0070AD"/>
          <View>
            <Text className="text-[20px] ml-4 mt-3">Feedback</Text>
          </View>
        </View>

        <Pressable className="flex-row mb-4 ml-[-3px] pb-3 border-b-[1px]" onPress={logOut}>
          <LogoutIcon width={60} height={60} color="transparent" strokeColor="#0070AD"/>
          <View className="ml-5 mt-3">
            <Text className="text-[20px]">Log out</Text>
          </View>
        </Pressable>
      </View>

      {/* <DrawerItem
        label="Log Out"
        onPress={logOut}
      /> */}
    </DrawerContentScrollView>
  );
}

