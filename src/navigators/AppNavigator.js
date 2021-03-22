import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BitcoinRatesScreen from '../screens/BitcoinRatesScreen';
import RestAPIScreen from '../screens/RestAPIScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          tabStyle: {
            justifyContent: 'center',
            borderRightWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
          },
          labelStyle: {
            fontSize: 16,
          },
        }}>
        <Tab.Screen name="Websocket" component={BitcoinRatesScreen} />
        <Tab.Screen name="Rest API" component={RestAPIScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
