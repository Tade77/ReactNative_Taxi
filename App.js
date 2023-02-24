import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Authentication from "./src/Screens/AuthPin";
import Login from "./src/Screens/Login";
import Profile from "./src/Screens/Profile";
import SignUp from "./src/Screens/SignUp";
import WelcomeScreen from "./src/Screens/WelcomeScreen";

export default function App() {
  const [welcome, SetWelcome] = useState(false);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="authentication" component={Authentication} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
