import React, { useState, useEffect } from 'react';
import ViewCarpools from '../components/AllCarpools';
import { fetchCarpools } from '../services/fetchCarpools';



const ViewCarpoolsScreen = () => {
    const [carpools, setCarpools] = useState({});

    const refreshCarpools = async () => {
        const fetchedCarpools = await fetchCarpools();
        setCarpools(fetchedCarpools);
        console.log(fetchedCarpools);
    }

    useEffect( () => {
        refreshCarpools();
    }, []);
    return (
        <ViewCarpools
            carpools={carpools}
            fetchCarpools={refreshCarpools}
        />

  );
};
export default ViewCarpoolsScreen;
