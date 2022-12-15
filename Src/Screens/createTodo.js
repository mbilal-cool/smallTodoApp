import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import {lightThemeColors} from '../theme';
import FocusAwareStatusBar from '../Components/Abstract/focusAwareStatusBar';
import AbstractButton from '../Components/Abstract/abstractButton';
import TodoController from '../Controller/todoController';

const CreateTodo = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const onDoneButtonPress = () => {
    TodoController.createTodoHandler({title, description}, res =>
      navigation.goBack(),
    );
  };
  return (
    <View style={styles.main}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={lightThemeColors.red1}
        translucent={true}
      />
      <View style={styles.headerContainer}>
        <View style={styles.col}>
          <Text style={styles.textStyle}> Create Todos</Text>
        </View>
        <View style={[styles.col, {width: '30%'}]}>
          <AbstractButton
            backgroundColor={'transparent'}
            height={20}
            title={'Done'}
            titleStyle={{
              color: lightThemeColors.white,
              fontWeight: '600',
              fontSize: 14,
            }}
            // iconMargin={10}
            width={'70%'}
            borderRadius={30}
            onPress={() => onDoneButtonPress()}
          />
        </View>
      </View>
      <View style={styles.middleContainer}>
        <View style={{marginVertical: 10}}>
          <Text>title</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Type here..."
            value={title}
            onChangeText={e => setTitle(e)}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Text>description</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Type here..."
            value={description}
            onChangeText={e => setDescription(e)}
          />
        </View>
      </View>
    </View>
  );
};

export default CreateTodo;

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: lightThemeColors.defaultBackground},
  headerContainer: {
    flexDirection: 'row',
    height: 80,
    width: '100%',
    backgroundColor: lightThemeColors.red1,
    alignItems: 'flex-end',
    // paddingTop: 130,
  },
  middleContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    // backgroundColor: 'yellow',
    flex: 1,
    // height: 450,
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  col: {
    // backgroundColor: 'red',
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 16,
    color: lightThemeColors.white,
  },
  textInput: {
    height: 50,
    width: '100%',
    borderRadius: 5,

    backgroundColor: lightThemeColors.white,
  },
});
