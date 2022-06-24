import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../../Components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        ImageSource={require("../../assets/forest.jpg")}
        score="5"
      />
      <ImageDetail
        title="Beach"
        ImageSource={require("../../assets/beach.jpg")}
        score="8"
      />
      <ImageDetail
        title="Mountain"
        ImageSource={require("../../assets/mountain.jpg")}
        score="7"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
