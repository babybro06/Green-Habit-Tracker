// frontend/screens/LoginScreen.js
import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styles from './LoginScreen.styles'; // Import the styles

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Text style={styles.subtitle}>Please enter your username and password</Text>

      <Text style={styles.label}>Username:</Text>
      <TextInput style={styles.input} placeholder="Enter Username" />

      <Text style={styles.label}>Password:</Text>
      <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry={true} />

      <Button title="Login" color = "#349923" onPress={() => navigation.navigate('Overview')} />
    </View>
  );
}
