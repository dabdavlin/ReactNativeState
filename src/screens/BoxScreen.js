import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View >
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    height: 200,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 100,
    width: 100,
    backgroundColor: 'red'
  },
  viewTwoStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 100,
    width: 100,
    alignSelf: 'flex-end',
    backgroundColor: 'green'
  },
  viewThreeStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 100,
    width: 100,
    backgroundColor: 'blue'
  }
});

export default BoxScreen;
