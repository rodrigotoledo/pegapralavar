import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import AccountCreatedScreen from './screens/AccountCreatedScreen';
import PrepareCartScreen from './screens/PrepareCartScreen';
import { GlobalProvider } from './GlobalContext';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} options={{ headerShown: false }} />
          <Stack.Screen name="PrepareCartScreen" component={PrepareCartScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AccountCreatedScreen" component={AccountCreatedScreen}  options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}
