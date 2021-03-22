import React, {useEffect} from 'react';
import AppNavigator from './src/navigators/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import {I18nManager} from 'react-native';
I18nManager.allowRTL(false);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return <AppNavigator />;
};

export default App;
