import React from 'react';
import { View, StyleSheet } from 'react-native';
import ShapeTop from '../assets/ShapeTop';
import ShapeBottom from '../assets/ShapeBottom';

const Background = ({ children }) => {
  return (
    <View style={styles.container}>
      <ShapeTop 
    //   style={StyleSheet.compose(styles.backgroundImage, styles.topShape)} 
      width={50}
      height={50}
      />
      {/* <ShapeBottom style={StyleSheet.compose(styles.backgroundImage, styles.bottomShape)} /> */}
      <ShapeBottom 
    //   style={StyleSheet.compose(styles.backgroundImage, styles.bottomShape)}
      style={styles.backgroundImage}
      width={50}
      height={50}
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
    top: 0,
    left: 30,
    // width: '20%',
    // height: '10%',
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
