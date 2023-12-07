import React from 'react';
import { View, StyleSheet } from 'react-native';
import ShapeTop from '../assets/ShapeTop';
import ShapeBottom from '../assets/ShapeBottom';

const Background = ({ children }) => {
  return (
    <View style={styles.container}>
      <ShapeTop 
        style={{ ...styles.backgroundImage, ...styles.topShape }}
        width={50}
        height={50}
        
      />
      <ShapeBottom 
        style={styles.backgroundImage}
        width={50}
        height={50}
        bottom={0}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '20%',
    height: '10%',
    bottom: 0,
    right: 0,
  },
  topShape: {
    top: 0,
    left: 0,
  },
  bottomShape: {
    bottom: 0,
    right: 0,
  },
});

export default Background;
