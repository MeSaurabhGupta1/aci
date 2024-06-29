// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import Signup from './src/Signup';
import PhotoInterpreter from './src/PhotoInterpreter';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import EditAndSubmit from './src/EditAndSubmit';
import AllergicSubstance from './src/AllergicSubstance';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="PhotoInterpreter" component={PhotoInterpreter} />
        <Stack.Screen name="EditAndSubmit" component={EditAndSubmit} />
        <Stack.Screen name="AllergicSubstance" component={AllergicSubstance} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;