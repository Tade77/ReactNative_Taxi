import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.profileContainer}>
        <Image style={styles.icon} source={require("../../assets/pro2.jpeg")} />
        <TextInput style={styles.inputs} placeholder="Fullname" />
        <TextInput style={styles.inputs} placeholder="Nickname" />
        <TextInput style={styles.inputs} placeholder="Date of birth" />
        <TextInput style={styles.inputs} placeholder="Email" />
        <TextInput style={styles.inputs} placeholder="Phone number" />
        <TextInput style={styles.inputs} placeholder="Gender" />
        <TouchableOpacity style={styles.btnWrapper}>
          <Text
            style={styles.btnText}
            onPress={() => navigation.navigate("authentication")}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    padding: 50,
  },
  icon: {
    // resizeMode: "center",
    borderRadius: 200,
    marginBottom: 30,
  },
  inputs: {
    fontSize: 16,
    padding: 10,
    height: 50,
    borderRadius: 5,
    backgroundColor: "rgba(158, 158,158, 0.1)",
    marginBottom: 25,
    width: 300,
  },
  btnWrapper: {
    width: 300,
    marginTop: 30,
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "#FFC107",
  },
  btnText: {
    padding: 10,
    fontSize: 22,
  },
  textHeader: {
    fontSize: 22,
    fontWeight: 600,
  },
});

export default Profile;
