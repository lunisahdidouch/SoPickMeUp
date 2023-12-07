import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ViewCarpools from '../components/AllCarpools';
import { fetchCarpools } from '../services/fetchCarpools';


const ViewCarpoolsScreen = () => {
    const [carpools, setCarpools] = useState({});

    const refreshCarpools = async () => {
        const fetchedCarpools = await fetchCarpools();
        setCarpools(fetchedCarpools);
    }

    useEffect(async () => {
        refreshCarpools();
    }, []);
    return (
        <ViewCarpools
            carpools={carpools}
            fetchCarpools={refreshCarpools}
        />
  );
};

const styles = StyleSheet.create({

});

export default ViewCarpoolsScreen;
