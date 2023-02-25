import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Authentication = () => {
  const [viewModal, setViewModal] = useState(false);
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
          <Text style={styles.btnText} onPress={() => setViewModal(true)}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        visible={viewModal}
        onRequestClose={() => setViewModal(false)}
      >
        <View style={styles.modalWrapper}>
          <View style={styles.modal}>
            <Image
              style={styles.modalIcon}
              source={require("../../assets/profile2.png")}
            />
            <Text style={styles.header}>Congratulations!</Text>
            <Text style={styles.modalTxt}>
              Your account is ready to use. You will be redirected to the
              Homepage in a few seconds
            </Text>
          </View>
        </View>
      </Modal>
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
    marginTop: 200,
    width: 300,
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "#FFC107",
  },
  btnText: {
    padding: 10,
    fontSize: 22,
  },
  modalWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#999",
  },
  modal: {
    height: 450,
    width: 300,
    textAlign: "center",
    color: "white",
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  modalIcon: {
    height: 150,
    width: 150,
    marginLeft: 70,
  },
  header: {
    fontSize: 28,
    color: "#878181",
    textAlign: "center",
    fontWeight: "700",
    marginTop: 40,
    marginBottom: 30,
  },
  modalTxt: {
    textAlign: "center",
    fontSize: 16,
    color: "#878181cf",
    lineHeight: 22,
  },
});

export default Authentication;
