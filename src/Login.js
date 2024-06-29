import {
  View,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Button,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
const Login = ({ navigation }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (field, value) => {
    setData({ ...data, [field]: value });
  };
  const handleSubmit = async () => {
    if (data.name == "" || data.password == "") {
      alert("Please fill in all fields.");
      return;
    }
    try {
      //   const response = await fetch("https://your-api-endpoint.com", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(formData),
      //   });
      //   const data = await response.json();
      //   console.log("Form submission response:", data);
      //   alert("Form submitted successfully!");
        const response = await axios.post("https://your-api-endpoint.com", data);

      console.log(data);
      navigation.navigate("PhotoInterpreter");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <KeyboardAvoidingView behavior="padding">
      <ScrollView>
        <View>
          <LinearGradient
            colors={["#42a1f5", "#03bafc", "#42c5f5"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              height: Dimensions.get("window").height * 0.2,
              width: "100%",
              alignItems: "center",
              paddingTop: 60,
            }}
          >
            <Text style={{ color: "white", fontSize: 36, fontWeight: "bold" }}>
              ACI
            </Text>
          </LinearGradient>
          <View
            style={{
              elevation: 10,
              backgroundColor: "white",
              borderRadius: 10,
              margin: 10,
              marginTop: -20,
              paddingVertical: 20,
              paddingHorizontal: 15,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#42c5f5",
                textAlign: "center",
              }}
            >
              LOGIN
            </Text>
            <View style={{ marginVertical: 10 }}>
              <Text
                style={{ fontSize: 16, color: "#03bafc", marginBottom: 12 }}
              >
                Username
              </Text>
              <TextInput
                placeholder="Enter your username"
                placeholderTextColor="gray"
                keyboardType="default"
                secureTextEntry={false}
                value={data.username}
                onChangeText={(text) => {
                  handleChange("username", text);
                }}
                style={{
                  borderBottomColor: "#03bafc",
                  borderBottomWidth: 1,
                  paddingVertical: 0,
                  marginTop: 5,
                  paddingBottom: 5,
                }}
              />
            </View>
            <View style={{ marginVertical: 10 }}>
              <Text
                style={{ fontSize: 16, color: "#03bafc", marginBottom: 12 }}
              >
                Password
              </Text>
              <TextInput
                placeholder="********"
                placeholderTextColor="gray"
                keyboardType="default"
                secureTextEntry={true}
                value={data.password}
                onChangeText={(text) => handleChange("password", text)}
                style={{
                  borderBottomColor: "#03bafc",
                  borderBottomWidth: 1,
                  paddingVertical: 0,
                  marginTop: 5,
                  paddingBottom: 5,
                }}
              />
            </View>
            {/* <Text
              style={{ color: "#42c5f5", fontSize: 16, textAlign: "right" }}
            >
              Forgot Password?
            </Text> */}
            <TouchableOpacity
              onPress={handleSubmit}
              style={{
                backgroundColor: "#03bafc",
                padding: 10,
                borderRadius: 8,
                margin: 16,
                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <Text style={{ margin: "auto", color: "white", fontSize: 18 }}>
                LOGIN
              </Text>
            </TouchableOpacity>
            <Text
              style={{ color: "#42c5f5", fontSize: 16, textAlign: "center" }}
            >
              Don't have an account?{" "}
              <Text onPress={() => navigation.navigate("Signup")}>Signup</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Login;
