// frontend/screens/LoginScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <h3>Login Screen</h3>
        <h2>Login details</h2>
        <text>Username: </text> <textarea>             </textarea>
        <text>Password </text> <textarea>     </textarea>
      <Button
        title="Go to Overview"
        title2="Login"
        onPress={() => navigation.navigate('Overview')}
      />
    </View>
  );
}
