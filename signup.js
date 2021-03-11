import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textBox} placeholder="username" />
      <TextInput
        style={styles.textBox}
        placeholder="password"
        secureTextEntry={true}
      />
      <TextInput
          style={styles.textbox}
          placeholder='Email id'
          autoCapitalize="none"
     />
        <TextInput
          style={styles.textbox}
          placeholder='Phone Number'
          autoCapitalize="none"
     />
      <Pressable
        style={styles.RegisterButton}
        onPress={() => {
          console.log("Button Pressed 1");
        }}
      >
        <Text style={styles.RegisterButtonText}>Register</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
  },

  textBox: {
    width: "100%",
    height: 40,
    margin: 10,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },

  RegisterButton: {
    padding: 20,
    width: "90%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },

  RegisterButtonText: {
    color: "white",
  },
});

export default RegisterScreen;