import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <TouchableOpacity style={styles.btnWrapper}>
        <Text
          onPress={() => navigation.navigate("login")}
          style={styles.btnText}
        >
          Get Started
        </Text>
      </TouchableOpacity>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC107",
  },
  logo: {
    borderRadius: 20,
    resizeMode: "cover",
  },
  btnWrapper: {
    marginTop: 100,
    height: 50,
    width: 320,
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "white",
  },
  btnText: {
    marginTop: 8,
    fontSize: 22,
    color: "#FFC107",
  },
});

export default WelcomeScreen;
