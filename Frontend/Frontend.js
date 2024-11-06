// frontend/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import OverviewScreen from './screens/OverviewScreen';
import HabitScreen from './screens/HabitScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Overview" component={OverviewScreen} />
        <Stack.Screen name="Habit" component={HabitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

export default function HabitScreen() {
  const [title, setTitle] = useState('');
  const [frequency, setFrequency] = useState('');

  const addHabit = () => {
    axios.post('http://localhost:5000/api/habits', { title, frequency })
      .then(response => alert("Habit added successfully"))
      .catch(error => console.error("Error adding habit", error));
  };

  return (
    <View>
      <Text>Habit Title</Text>
      <TextInput value={title} onChangeText={setTitle} />
      <Text>Frequency</Text>
      <TextInput value={frequency} onChangeText={setFrequency} placeholder="daily/weekly/monthly" />
      <Button title="Add Habit" onPress={addHabit} />
    </View>
  );
}
