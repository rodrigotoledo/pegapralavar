import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}