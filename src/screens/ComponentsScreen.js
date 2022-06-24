import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const ComponentsScreen = () => {
  const name = 'Trevor';

  return (
    <View>
      <Text style={styles.HeadStyle}>Getting started with React Native!</Text>
      <Text style={styles.SecStyle}> My name is {name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeadStyle: {
    fontSize: 45,
  },
  SecStyle: {
    fontSize: 20
  }
});





export default ComponentsScreen;

