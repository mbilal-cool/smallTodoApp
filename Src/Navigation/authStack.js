import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../Screens/splashScreen';
import RegisterScreen from '../Screens/registerScreen';
import LoginScreen from '../Screens/loginScreen';
import WelcomeScreen from '../Screens/welcome';
const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
