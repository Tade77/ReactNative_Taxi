import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.loginWrapper}>
      <Text style={styles.login}>Login to your</Text>
      <Text style={styles.login}>Account</Text>
      <TextInput style={styles.inputs} placeholder="email" />
      <TextInput
        maxLength={6}
        secureTextEntry
        style={styles.inputs}
        placeholder="password"
      />
      <TouchableOpacity style={styles.btnWrapper}>
        <Text style={styles.btnText}>Sign in</Text>
      </TouchableOpacity>
      <Text style={styles.psw}>Forgot the password?</Text>
      <Text style={styles.next}>
        Don't have an account?{" "}
        <Text onPress={() => navigation.navigate("profile")} style={styles.up}>
          Sign up
        </Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    fontSize: 36,
    marginBottom: 20,
  },
  inputs: {
    fontSize: 16,
    paddingLeft: 10,
    height: 40,
    borderRadius: 5,
    backgroundColor: "rgba(158, 158,158, 0.1)",
    marginBottom: 25,
    width: 300,
  },
  btnWrapper: {
    width: 300,
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "#FFC107",
  },
  btnText: {
    padding: 10,
    fontSize: 22,
  },
  psw: {
    color: "#FFC107",
    fontSize: 18,
    marginTop: 20,
  },
  next: {
    fontSize: 16,
    marginTop: 20,
  },
  up: {
    color: "#ffc107",
  },
});

export default Login;
