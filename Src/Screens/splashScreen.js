import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import AuthController from '../Controller/authController';
import RNBootSplash from 'react-native-bootsplash';
import {navigate} from '../Navigation/mainNavigation';

const SplashScreen = () => {
  useEffect(() => {
    AuthController.handleRestoreUserAndAuthenticate()
      .then(res => {
        console.log(res, '????PPPPP');
        if (res) {
          RNBootSplash.hide({fade: true});
          navigate('AppStack');
        } else {
          RNBootSplash.hide({fade: true});
          navigate('WelcomeScreen');
        }
      })
      .catch(err => {
        RNBootSplash.hide({fade: true});
        console.log(err);
        navigate('AuthStack');
      });
  }, []);
  return (
    <View style={styles.main}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require('../Assets/Images/logo.png')}></Image>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  logo: {height: 150, width: 180},
});
