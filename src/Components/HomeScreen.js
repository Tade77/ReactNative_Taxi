import React from "react";
import { Image, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Image
        style={styles.logo}
        source={require("../../assets/Screen Shot 2023-01-29 at 1.35 1.png")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
  },
});

export default HomeScreen;
