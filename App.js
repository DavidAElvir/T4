import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from './screens/GameScreen';
import WinnerScreen from './screens/WinnerScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Game">
        <Stack.Screen name="Game" component={GameScreen} options={{ title: 'Memory Game' }} />
        <Stack.Screen name="Winner" component={WinnerScreen} options={{ title: 'Winner' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}