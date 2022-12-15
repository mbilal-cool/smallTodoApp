import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  allTodoItems: [],
  totalNoOFpages: 1,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    saveTodoItems: (state, action) => {
      console.log('data in payload', action.payload);
      state.totalNoOFpages = action.payload.noOfPage;
      state.allTodoItems = [...state.allTodoItems, ...action.payload.res];
    },
    addTodoItems: (state, action) => {
      state.allTodoItems.unshift(action.payload);
    },
    updateTodoItems: (state, action) => {
      const singleItemIndex = state.allTodoItems.findIndex(
        singleTodoItem => singleTodoItem.id === action.payload.id,
      );

      if (singleItemIndex >= 0) {
        state.allTodoItems[singleItemIndex] = action.payload;
      } else {
        console.log('item not get by id for update in expense reducer for ');
      }
    },
    deleteTodoItems: (state, action) => {
      state.allTodoItems = state.allTodoItems.filter(
        item => item.id !== action.payload,
      );
    },
  },
});
export const {saveTodoItems, addTodoItems, updateTodoItems, deleteTodoItems} =
  todoSlice.actions;
export default todoSlice.reducer;
