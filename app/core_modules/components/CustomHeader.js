import React from 'react';
import { View, Text, StyleSheet, Pressable  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowBack from '../../assets/ArrowBack';
import HomeIcon from '../../assets/HomeIcon';
import NotificationIcon from '../../assets/NotificationIcon';
import HamburgerIcon from '../../assets/HamburgerIcon';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({navigation, name, showHamburger = "true"}) => {
  const navigationControls = useNavigation();
  const handleHomePress = () => {
    navigationControls.navigate('Alle carpools');
  };
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.headerContainer}>
              <View style={styles.iconContainer}>
                <View onPress={() => navigation.goBack(null)} className="mr-7">
                  {showHamburger ? (
                  <Pressable onPress={() => navigationControls.openDrawer()} className="mr-4">
                    <HamburgerIcon color= "white"  strokeColor={"white"} width={38} height={38} />
                  </Pressable>
                    // <HamburgerIcon onPress={() => navigation.openDrawer()} />
                  ) : (
                    <Pressable onPress={() => navigation.goBack(null)} className="mr-4">
                      <ArrowBack                   
                      width="38" 
                      height="38" 
                      color="#FFF" 
                      />
                    </Pressable>
                      )}
                    </View>
                    <Pressable onPress={handleHomePress}>
                      <HomeIcon width="38" height="38" color="#FFF" />
                    </Pressable>
                </View>
                <Text style={styles.headerText}>{name}</Text>
                <View style={styles.iconRight}>
                    <NotificationIcon width="38" height="38" color="#FFF" />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        height: 73,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#0070AD',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 80,
    },
    headerText: {
        color: '#FFF',
        fontSize: 20,
    },
    iconRight: {
        justifyContent: 'flex-end',
        width: 40,
    },
});

export default CustomHeader;
