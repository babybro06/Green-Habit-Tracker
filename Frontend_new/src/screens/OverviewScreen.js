// frontend/screens/OverviewScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function OverviewScreen({ navigation }) {
  return (
    <View>
      <Text>Overview Screen</Text>
      <Button
        title="Go to Habit Screen"
        onPress={() => navigation.navigate('Habit')}
      />
    </View>
  );
}
