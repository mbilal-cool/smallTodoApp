import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import TodoController from '../Controller/todoController';
import FocusAwareStatusBar from '../Components/Abstract/focusAwareStatusBar';
import {lightThemeColors} from '../theme';
import AbstractTodoItem from '../Components/Abstract/abstractTodoItem';
import AbstractButton from '../Components/Abstract/abstractButton';
import SearchIconSvg from '../Assets/Icons/searchSvg';
const TodoLists = ({navigation}) => {
  const {allTodoItems, totalNoOFpages} = useSelector(state => state.todo);
  const [searchInput, setSearchInput] = useState('');
  const [searchedData, SetSearchData] = useState([]);
  const [initialPageValue, SetInitialPageValue] = useState(1);

  useEffect(() => {
    TodoController.getTodoItemsHandler(initialPageValue, res =>
      console.log('got all todo Items'),
    );
  }, []);
  const loadMore = () => {
    console.log('got working', totalNoOFpages, initialPageValue);
    if (initialPageValue < totalNoOFpages) {
      let tempPage = initialPageValue + 1;
      TodoController.getTodoItemsHandler(
        tempPage,
        res => console.log('current no of page', tempPage),
        SetInitialPageValue(tempPage),
      );
    }
  };
  const onCreateButtonPress = () => {
    navigation.navigate('CreateTodo');
  };
  const onEditTodoItemPress = item => {
    navigation.navigate('UpdateTodo', item);
  };
  const onDeleteTodoItemPress = id => {
    TodoController.deleteTodoItemsHandler(id, res => console.log('deleted!'));
  };
  const searchFilterFunction = txt => {
    setSearchInput(txt);
    if (txt) {
      const newData = allTodoItems.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = txt.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      console.log('newData', newData);
      SetSearchData(newData);
    }
  };
  // console.log('searchData??', searchedData);
  return (
    <View style={styles.main}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={lightThemeColors.red1}
        translucent={true}
      />
      <View style={styles.headerContainer}>
        <View style={[styles.col]}>
          <Text style={styles.textStyle}>Recently Added Todos</Text>
        </View>
        <View style={[styles.col, {width: '30%'}]}>
          <AbstractButton
            backgroundColor={'transparent'}
            height={20}
            title={'Create +'}
            titleStyle={{
              color: lightThemeColors.white,
              fontWeight: '600',
              fontSize: 14,
            }}
            // iconMargin={10}
            width={'70%'}
            borderRadius={30}
            onPress={() => onCreateButtonPress()}
          />
        </View>
      </View>
      <View style={styles.middleContainer}>
        <View
          style={[
            styles.headerContainer,
            {
              height: 40,
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: lightThemeColors.grey1,
              marginBottom: 10,
            },
          ]}>
          <View style={[styles.col, {width: '10%', height: '100%'}]}>
            <SearchIconSvg />
          </View>
          <View
            style={[
              styles.col,
              {backgroundColor: 'yellow', height: '100%', width: '90%'},
            ]}>
            <TextInput
              style={styles.textInput}
              placeholder="Search here..."
              value={searchInput}
              onChangeText={e => searchFilterFunction(e)}
            />
          </View>
        </View>
        {searchInput ? (
          <FlatList
            contentContainerStyle={{paddingBottom: 20}}
            showsVerticalScrollIndicator={false}
            bounces={false}
            data={searchedData}
            keyExtractor={(item, index) => item.id}
            renderItem={(item, index) => (
              <AbstractTodoItem
                item={item}
                onEditPress={() => onEditTodoItemPress(item)}
                onDeletePress={() => onDeleteTodoItemPress(item.item.id)}
              />
            )}
          />
        ) : (
          <FlatList
            onEndReached={() => loadMore()}
            contentContainerStyle={{paddingBottom: 20}}
            showsVerticalScrollIndicator={false}
            bounces={false}
            data={allTodoItems}
            keyExtractor={(item, index) => item.id}
            renderItem={(item, index) => (
              <AbstractTodoItem
                item={item}
                onEditPress={() => onEditTodoItemPress(item)}
                onDeletePress={() => onDeleteTodoItemPress(item.item.id)}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default TodoLists;
const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: 'white'},
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
    backgroundColor: lightThemeColors.defaultBackground,
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
    height: '100%',
    width: '100%',
    borderRadius: 5,

    backgroundColor: lightThemeColors.white,
  },
});
