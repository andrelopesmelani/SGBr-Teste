import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Model from '../screens/Model';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Model" 
        component={Model} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
