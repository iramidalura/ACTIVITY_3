import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../components/AppTextInput";

const LoginScreen = ({ navigation: { navigate } }) => {
  const handleForgotPassword = () => {
    navigate("AccountRecovery");
  };

  const handleSignIn = () => {
    // Implement your sign-in logic here
    // For now, let's just navigate to the "Home" screen
    navigate("Home");
  };

  const handleLogin = async () => {
    try {
      // setLoading(true);
      if (email === "") {
        setErrors({ email: true });
        return false;
      }

      if (password === "") {
        setErrors({ password: true });
        return false;
      }

      const url = "http://192.168.68.128/api/v1/login";
      const data = {
        email,
        password,
      };
      const result = await fetchServices.postData(url, data);
      console.debug(result);
      if (result.message != null) {
        showToast(result?.message);
      } else {
        navigation.navigate("Home");
      }
    } catch (e) {
      console.debug(e.toString());
    } finally {
      // setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              fontFamily: Font["poppins-bold"],
              marginVertical: Spacing * 3,
            }}
          >
            LOGIN
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.large,
              maxWidth: "80%",
              textAlign: "center",
            }}
          >
            WELCOME!
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <AppTextInput placeholder="Email" />
          <AppTextInput placeholder="Password" />
        </View>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.small,
              color: Colors.primary,
              alignSelf: "flex-end",
              textDecorationLine: "underline",
            }}
          >
            Forgot your password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSignIn}
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.primary,
            marginVertical: Spacing * 3,
            borderRadius: Spacing,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate("SIGN UP")}
          style={{
            padding: Spacing,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Create a new account
          </Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

