import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNavigator';
import { SplashScreen } from './src/screens';

const App = () => {
  return (
    <NavigationContainer>
      <SplashScreen/>
    </NavigationContainer>
  );
};

export default App;
