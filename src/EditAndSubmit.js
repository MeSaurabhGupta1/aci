import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
const EditAndSubmit = ({ route, navigation }) => {
  const [edit, setEdit] = useState(false);
  const [apiData, setApiData] = useState(route.params.apiData);
  const handleChange = (key, value) => {
    let newArr = [...apiData];
    newArr[key] = value;
    setApiData(newArr);
  };
  const handleSubmit = () => {
    console.log(apiData);
    //apicall

    navigation.navigate("AllergicSubstance", { apiData: apiData });
  };
  return (
    <KeyboardAvoidingView behavior="padding">
    <ScrollView>
    <View >
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
          height: Dimensions.get("window").height * 0.8
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
          List of Ingredients in the Product
        </Text>
        <View style={{ margin: 10, alignSelf: "center" }}>
          {apiData.map((value, key) =>
            edit ? (
              <View
                style={{ flexDirection: "row", alignItems: "center" }}
                key={key}
              >
                <Text style={{ fontSize: 16 }}>{key + 1}: </Text>
                <TextInput
                  style={{ fontSize: 16, color: "gray" }}
                  onChangeText={(e) => handleChange(key, e)}
                >
                  {value}
                </TextInput>
              </View>
            ) : (
              <Text key={key} style={{ fontSize: 16 }}>
                {key + 1}: {value}
              </Text>
            )
          )}
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 16,
            transform: [{ translateX: Dimensions.get("window").width * 0.18 }],
            width: Dimensions.get("window").width * 0.6,
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => setEdit(!edit)}
          >
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Save changes and submit</Text>
          </TouchableOpacity>
          <Text
            style={{ color: "#42c5f5", fontSize: 16, textAlign: "center" }}
            onPress={() => navigation.navigate("Login")}
          >
            Get back to login page
          </Text>
        </View>
      </View>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default EditAndSubmit;
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#03bafc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
