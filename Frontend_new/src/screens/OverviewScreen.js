// frontend/screens/OverviewScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function OverviewScreen({ navigation }) {
  return (
      <View>
          <h1>Overview Screen</h1>
          <h2>Calculate your Carbon Footprint</h2>
          <a href="https://www.footprintcalculator.org/home/en">Footprint Calculator</a>


          <Button
              title="Go to Habit Screen"
              onPress={() => navigation.navigate('Habit')}
          />
      </View>
  );
}
