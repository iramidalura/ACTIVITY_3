import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Perform logout logic here (clear authentication state, etc.)
    // For now, let's navigate back to the Login screen
    navigation.navigate("LOGIN");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Home Screen!</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: Spacing * 2,
  },
  welcomeText: {
    fontFamily: Font["poppins-semiBold"],
    fontSize: FontSize.large,
    marginBottom: Spacing * 2,
    textAlign: "center",
    color: Colors.primary,
  },
  logoutButton: {
    padding: Spacing * 2,
    backgroundColor: Colors.primary,
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing,
    },
    shadowOpacity: 0.3,
    shadowRadius: Spacing,
  },
  logoutButtonText: {
    fontFamily: Font["poppins-bold"],
    color: Colors.onPrimary,
    textAlign: "center",
    fontSize: FontSize.large,
  },
});

export default HomeScreen;
