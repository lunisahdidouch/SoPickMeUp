import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowBack from '../assets/ArrowBack';
import HomeIcon from '../assets/HomeIcon';
import NotificationIcon from '../assets/NotificationIcon';

const CustomHeader = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.headerContainer}>
                <View style={styles.iconContainer}>
                    <ArrowBack width="38" height="38" color="#FFF" />
                    <HomeIcon width="38" height="38" color="#FFF" />
                </View>
                <Text style={styles.headerText}>Your Header Text</Text>
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
