import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import AuthController from '../Controller/authController';
import RNBootSplash from 'react-native-bootsplash';
import {navigate} from '../Navigation/mainNavigation';

const WelcomeScreen = () => {
  useEffect(() => {
    setTimeout(() => navigate('LoginScreen'), 4000);
  }, []);
  return (
    <View style={styles.main}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require('../Assets/Images/welcom.png')}></Image>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  logo: {height: 150, width: 180},
});
