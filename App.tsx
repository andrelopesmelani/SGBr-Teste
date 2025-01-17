import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './src/context/authentication';

const App = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  )
};

export default App;
