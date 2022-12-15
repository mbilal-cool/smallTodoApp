import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AbstractButton from './abstractButton';
import {lightThemeColors} from '../../theme';
const AbstractTodoItem = ({
  item,
  onEditPress = () => false,
  onDeletePress = () => false,
}) => {
  // console.log('item', item.item);
  return (
    <View style={Styles.main}>
      <View style={Styles.titleContainer}>
        <Text>{item.item.title}</Text>
      </View>
      <View style={Styles.buttonsContainer}>
        <AbstractButton
          backgroundColor={lightThemeColors.red1}
          height={20}
          title={'Edit'}
          titleStyle={{
            color: lightThemeColors.white,

            fontWeight: '600',
            fontSize: 14,
          }}
          // iconMargin={10}
          width={'40%'}
          borderRadius={30}
          onPress={() => onEditPress()}
        />
        <AbstractButton
          backgroundColor={lightThemeColors.red1}
          height={20}
          title={'Delete'}
          titleStyle={{
            color: lightThemeColors.white,

            fontWeight: '600',
            fontSize: 14,
          }}
          // iconMargin={10}
          width={'40%'}
          borderRadius={30}
          onPress={() => onDeletePress()}
        />
      </View>
    </View>
  );
};

export default AbstractTodoItem;
const Styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  titleContainer: {
    width: '60%',
    // backgroundColor: 'yellow',
    height: '100%',
    justifyContent: 'center',
  },
  buttonsContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    // backgroundColor: 'green',
    height: '100%',
  },
});
