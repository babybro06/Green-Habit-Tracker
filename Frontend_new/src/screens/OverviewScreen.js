// frontend/screens/OverviewScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './OverviewScreen.styles';

export default function OverviewScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Overview Screen</Text>
      <Text style={styles.subtitle}>Calculate your Carbon Footprint</Text>

      {/* Link to the Footprint Calculator */}
      <Text
        style={styles.link}
        onPress={() => Linking.openURL('https://www.footprintcalculator.org/home/en')}
      >
        Footprint Calculator
      </Text>

      {/* Custom styled button */}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Habit')}
      >
        <Text style={styles.buttonText}>Go to Habit Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
