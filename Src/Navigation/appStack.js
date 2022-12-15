import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoLists from '../Screens/todoLists';
import CreateTodo from '../Screens/createTodo';
import UpdateTodo from '../Screens/updateTodo';

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TodoLists" component={TodoLists} />
      <Stack.Screen name="CreateTodo" component={CreateTodo} />
      <Stack.Screen name="UpdateTodo" component={UpdateTodo} />
    </Stack.Navigator>
  );
};

export default AppStack;
