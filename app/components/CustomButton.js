import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({title, onPress, backgroundColor = '#0070AD', borderColor = '#0070AD',  textColor = '#fff', width = 300, height = 50}) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: backgroundColor,
      borderWidth: 1,
      borderColor: borderColor,
      borderRadius: 10,
      height: height,
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: textColor,
    },
  })

  return (
    <Pressable style={styles.button}
    onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}



export default CustomButton