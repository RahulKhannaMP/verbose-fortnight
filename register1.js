import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View, _Text } from "react-native";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
     
      <TextInput
          style={styles.textBox}
          placeholder='Email ID'
          
     />
     <TextInput
        style={styles.textBox}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.textBox}
        placeholder="Confirm Password"
        secureTextEntry={true}
      />
        
      <Pressable
        style={styles.RegisterButton}
        onPress={() => {
          console.log("User Registered");
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