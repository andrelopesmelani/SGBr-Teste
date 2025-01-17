import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import { useAuth } from '../context/authentication';
import DrawerNavigator from './DrawerNavigator';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../themes/colors';

const AppNavigator = () => {
  const { isAuthenticated, initialized } = useAuth();

  if (!initialized) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.background,
        }}
      >
        <ActivityIndicator size={40} color={colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <DrawerNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;
