import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {lightThemeColors} from '../theme';
import FocusAwareStatusBar from '../Components/Abstract/focusAwareStatusBar';
import AbstractButton from '../Components/Abstract/abstractButton';
import TodoController from '../Controller/todoController';
const UpdateTodo = ({navigation, route}) => {
  const item = route.params;
  useEffect(() => {
    setTodoItem(item.item);
  }, []);
  const [todoItem, setTodoItem] = useState(item.item);
  const onUpDateButtonPress = () => {
    console.log('check updation', todoItem);
    TodoController.updateTodoItemsHandler(todoItem, res => navigation.goBack());
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
          <Text style={styles.textStyle}> Update || View Todos</Text>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <View style={{marginVertical: 10}}>
          <Text>title</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Type here..."
            value={todoItem.title}
            onChangeText={e => setTodoItem(prev => ({...prev, title: e}))}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Text>description</Text>
          <TextInput
            multiline={true}
            style={styles.textInput}
            placeholder="Type here..."
            value={todoItem.description}
            onChangeText={e => setTodoItem(prev => ({...prev, description: e}))}
          />
        </View>
        <AbstractButton
          backgroundColor={lightThemeColors.red1}
          height={40}
          title={'Update'}
          titleStyle={{
            color: lightThemeColors.white,

            fontWeight: '600',
            fontSize: 14,
          }}
          // iconMargin={10}
          width={'100%'}
          borderRadius={30}
          onPress={onUpDateButtonPress}
        />
      </View>
    </View>
  );
};

export default UpdateTodo;
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
    backgroundColor: 'yellow',
    flex: 1,
    // height: 450,
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  col: {
    // backgroundColor: 'red',
    height: 50,
    width: '100%',
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
