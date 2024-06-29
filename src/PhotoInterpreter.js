import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
const PhotoInterpreter = ({ navigation }) => {
  const [fileUri, setFileUri] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState([
    "palm oil",
    "sucrose",
    "glucose",
    "thickener",
  ]);
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permission to upload images.");
      setError("Error loading image");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setFileUri(result.assets[0].uri);
      setFileName(result.assets[0].fileName);
      setError(null);
    }
  };

  const takePicture = async () => {
    console.log("takePicture called");
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permission to access the camera.");
      setError("Something went wrong");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });
    if (!result.canceled) {
      setFileUri(result.assets[0].uri);
      setFileName(result.assets[0].fileName);
      setError(null);
    }
  };
  const handleSubmit = () => {
    console.log(fileName);
    console.log(fileUri);
    //apicall
    navigation.navigate("EditAndSubmit", { apiData: data });
  };
  return (
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
      <View style={styles.kuchbhi}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <Text style={styles.buttonText}>Choose Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.buttonText}>Open Camera</Text>
          </TouchableOpacity>
        </View>
        {fileUri ? (
          <View style={styles.imageContainer}>
            <Image source={{ uri: fileUri }} style={styles.image} />
          </View>
        ) : (
          <Text style={styles.errorText}>{error}</Text>
        )}
        {fileName && (
          <Text
            style={{ marginBottom: 30, marginTop: 10, alignSelf: "center" }}
          >
            {fileName}
          </Text>
        )}
        {fileName && (
          <TouchableOpacity
            style={{ ...styles.button, width: 200, alignSelf: "center" }}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        )}
        <Text style={{ color: "#42c5f5", fontSize: 16, textAlign: "center" }}>
          {" "}
          <Text onPress={() => navigation.navigate("Login")}>
            Get back to login page
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default PhotoInterpreter;
const styles = StyleSheet.create({
  kuchbhi: {
    elevation: 10,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    marginTop: -20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    height: 700,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
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
  imageContainer: {
    // borderRadius: 8,
    // marginBottom: 16,
    // shadowColor: "#000000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.4,
    // shadowRadius: 4,
    // elevation: 5,
    // height: 2000
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 8,
    alignSelf: "center",
  },
  errorText: {
    color: "red",
    marginTop: 16,
  },
});
