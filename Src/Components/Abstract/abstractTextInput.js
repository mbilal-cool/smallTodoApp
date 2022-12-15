import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {lightThemeColors, Fonts} from '../../theme';
import {useTheme} from '@react-navigation/native';
import {useState} from 'react';
const AbstractTextInput = ({
  Height,
  Width,
  Label,
  PlaceHolder,
  placeHolderTextStyle,
  borderRadius,
  borderWidth,
  borderColor,
  borderBottomWidth,
  Value,
  onChangeText = () => false,
  BackgroundColor,
  placeholderTextColor,
  type,
  renderLabelIcon,
  renderInputIcon,
  labelStyle,
  password,
  validate,
  alignIcon,
  DefaultValue,
  errorMessage,
}) => {
  return (
    <View style={{marginVertical: 10, width: '100%'}}>
      <View
        style={[
          {
            // backgroundColor: 'red',
            justifyContent: 'center',
            paddingHorizontal: 15,
            height: Height,
            width: Width,
            borderRadius: borderRadius ? borderRadius : 50,
            borderWidth: borderWidth,
            // backgroundColor: BackgroundColor,
            borderColor: borderColor,
          },
        ]}>
        <TextInput
          placeholder={PlaceHolder}
          style={[
            placeHolderTextStyle,
            {
              flexDirection: 'row',
              alignItems: 'center',
            },
          ]}
          placeholderTextColor={placeholderTextColor}
          value={Value}
          onChangeText={e => {
            onChangeText(e);
          }}
          secureTextEntry={password ? true : false}
        />
      </View>
      <Text
        style={{
          fontSize: 12,
          marginLeft: 12,
          color: lightThemeColors.red1,
        }}>
        {errorMessage}
      </Text>
    </View>
  );
};

export default AbstractTextInput;

const styles = StyleSheet.create({
  inputBox: {
    height: 50,

    width: '100%',
    backgroundColor: 'black',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  tile: {
    height: 20,
    width: '100%',
    // backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  col: {
    height: '100%',
    width: ' 10%',
    // backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    fontWeight: '500',
    fontSize: 12,
    color: lightThemeColors.grey1,
  },
  placeHolderTextStyle: {
    fontWeight: '500',
    fontSize: 12,
    // color: 'white',
  },
  textInput: {
    height: 30,
    // width: '100%',
    // justifyContent: 'flex-end',

    // backgroundColor: 'blue',
  },
});
