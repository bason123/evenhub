import {View, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {SplashScreen} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNavigator';

const App = () => {
  const [isShowSplash, setisShowSplash] = useState(true);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setisShowSplash(false);
    }, 1500);

    return () => clearTimeout(timeout)
  }, []);

  return isShowSplash ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
