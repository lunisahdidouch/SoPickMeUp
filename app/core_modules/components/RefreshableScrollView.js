import React, { useState, useCallback } from 'react';
import { ScrollView, RefreshControl } from 'react-native';

const RefreshableScrollView = ({ onRefresh, children }) => {
    const [refreshing, setRefreshing] = useState(false);

    const refresh = () => {
        setRefreshing(true);
        onRefresh().finally(() => setRefreshing(false));
    } ;

    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={refresh} />
            }
        >
            {children}
        </ScrollView>
    );
};

export default RefreshableScrollView;