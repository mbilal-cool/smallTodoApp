import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {lightThemeColors} from '../theme';
import AbstractButton from '../Components/Abstract/abstractButton';
import AbstractTextInput from '../Components/Abstract/abstractTextInput';
import FocusAwareStatusBar from '../Components/Abstract/focusAwareStatusBar';
import AuthController from '../Controller/authController';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [resError, setResError] = useState('');
  const [loading, setLoading] = useState(false);

  const onChangeText = (e, type) => {
    switch (type) {
      case 'email':
        return setEmail(e), ValidateEmail(e);
      case 'password':
        return setPassword(e), ValidatePassword(e);

      case 'confirmPassword':
        return setConfirmPassword(e), validateConfirmPassword(e);
      default:
        return;
    }
  };
  const validateConfirmPassword = e => {
    let res = password.match(e);
    if (res) {
      setConfirmPasswordError('');
    } else {
      setConfirmPasswordError('password did not match');
    }
  };
  const ValidatePassword = e => {
    if (e.length < 6) {
      setPasswordError('password should be 6 character long ');
    } else {
      setPasswordError('');
    }
  };
  const ValidateEmail = mail => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      setEmailError('');
    } else {
      setEmailError('Enter Valid Email');
    }
  };

  const onRegisterButtonPressed = () => {
    setResError('');
    if (!email && !password && !confirmPassword) {
      setEmailError('*required feild!');
      setPasswordError('*required feild!');
      setConfirmPasswordError('*required feild!');
    } else if (!email) {
      setEmailError('*required feild!');
    } else if (!password) {
      setConfirmPassword('*required feild!');
    } else if (!confirmPassword) {
      confirmPasswordError('*required feild!');
    } else if (email != '' && password != '' && confirmPassword != '') {
      if (!password.match(confirmPassword)) {
        setConfirmPasswordError('password did not match');
      } else if (password.length < 6) {
        setPasswordError('password should be 6 character long ');
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailError('Enter Valid Email');
      } else {
        setLoading(true);
        setLoading(true);
        AuthController.handleRegisterUser(
          {email, password, confirmPassword},

          res => {
            setLoading(false);
            if (res.success) {
              setConfirmPassword('');
              setEmail('');
              setPassword('');
            } else {
              // console.log('abbbb00', res);
              setResError(res);
            }
          },
        );
      }

      ///
    }
  };
  return (
    <>
      <SafeAreaView
        style={[
          styles.main,
          {backgroundColor: lightThemeColors.defaultBackground},
        ]}>
        <FocusAwareStatusBar
          barStyle="dark-content"
          backgroundColor={lightThemeColors.defaultBackground}
          translucent={true}
        />
        <View
          style={[
            styles.containerHorizontal,
            {
              // backgroundColor: 'yellow',
              flex: 0.17,
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingBottom: 0,
            },
          ]}>
          <Text
            style={[
              styles.labelStyle,
              {color: lightThemeColors.black, fontWeight: '900', fontSize: 19},
            ]}>
            SignUp
          </Text>
        </View>
        <View style={styles.middleContainer}>
          <AbstractTextInput
            borderWidth={1}
            borderColor={lightThemeColors.grey}
            placeHolderTextStyle={[
              styles.labelStyle,
              {color: lightThemeColors.black},
            ]}
            PlaceHolder={'email'}
            placeholderTextColor={lightThemeColors.grey}
            Value={email}
            onChangeText={e => onChangeText(e, 'email')}
            errorMessage={emailError}
          />
          <AbstractTextInput
            password={true}
            borderWidth={1}
            borderColor={lightThemeColors.grey}
            placeHolderTextStyle={[
              styles.labelStyle,
              {color: lightThemeColors.black},
            ]}
            PlaceHolder={'Password'}
            placeholderTextColor={lightThemeColors.grey}
            Value={password}
            onChangeText={e => onChangeText(e, 'password')}
            errorMessage={passwordError}
          />
          <AbstractTextInput
            borderWidth={1}
            borderColor={lightThemeColors.grey}
            placeHolderTextStyle={[
              styles.labelStyle,
              {color: lightThemeColors.black},
            ]}
            PlaceHolder={'confirm password'}
            placeholderTextColor={lightThemeColors.grey}
            Value={confirmPassword}
            onChangeText={e => onChangeText(e, 'confirmPassword')}
            errorMessage={confirmPasswordError}
          />

          <AbstractButton
            backgroundColor={lightThemeColors.red1}
            height={50}
            title={loading ? null : 'Register'}
            titleStyle={{
              color: lightThemeColors.white,

              fontWeight: '600',
              fontSize: 16,
            }}
            renderRightIcon={() =>
              loading ? (
                <ActivityIndicator
                  size="small"
                  color={lightThemeColors.white}
                />
              ) : (
                false
              )
            }
            width={'100%'}
            borderRadius={30}
            onPress={onRegisterButtonPressed}
          />
          {resError ? (
            <Text
              style={[
                styles.labelStyle,
                {
                  color: lightThemeColors.red1,
                  fontSize: 14,
                  alignSelf: 'center',
                  marginTop: 8,
                },
              ]}>
              {resError}
            </Text>
          ) : null}
          {/* </View> */}
          <View
            style={[
              // styles.containerHorizontal,
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                paddingLeft: 15,
                paddingTop: 8,
              },
            ]}>
            <Text style={[styles.labelStyle, {color: lightThemeColors.grey1}]}>
              Allready Registered!?
            </Text>
            <AbstractButton
              backgroundColor={'transparent'}
              height={20}
              title={'LogIn'}
              titleStyle={{
                color: lightThemeColors.red1,

                fontWeight: '600',
                fontSize: 13,
              }}
              // iconMargin={10}
              width={'15%'}
              borderRadius={30}
              onPress={() => navigation.navigate('LoginScreen')}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  middleContainer: {
    flex: 1,
    paddingTop: 50,
    // backgroundColor: 'red',
    // justifyContent: 'center',
    paddingHorizontal: 20,
  },
  containerHorizontal: {
    // height: 230,
    // width: '100%',
    flex: 1,
    // backgroundColor: 'green',
    // alignItems: 'flex-end',
    // justifyContent: 'space-between',
  },
  titleStyle: {
    fontWeight: '700',
    fontSize: 20,
    color: lightThemeColors.black,
  },
  labelStyle: {
    fontWeight: '500',
    color: lightThemeColors.black,
    fontSize: 13,
  },
});
