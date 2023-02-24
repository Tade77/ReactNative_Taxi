import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Authentication = () => {
  return (
    <View style={styles.authWrapper}>
      <Text style={styles.addPinText}>
        Add a PIN number to make your account more secure
      </Text>
      <View style={styles.pin}>
        <TextInput
          keyboardType="numeric"
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          keyboardType="numeric"
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          keyboardType="numeric"
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          keyboardType="numeric"
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.btnWrapper}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addPinText: {
    textAlign: "center",
    fontSize: 24,
  },
  pin: {
    flexDirection: "row",
    marginTop: 20,
  },
  input: {
    borderWidth: 2,
    width: 50,
    height: 50,
    margin: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    borderColor: "#FFC107",
    fontSize: 22,
    textAlign: "center",
  },
  btnWrapper: {
    marginTop: 100,
    width: 300,
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "#FFC107",
  },
  btnText: {
    padding: 10,
    fontSize: 22,
  },
});

export default Authentication;
