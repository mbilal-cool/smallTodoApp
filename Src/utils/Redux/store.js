import {configureStore} from '@reduxjs/toolkit';
import userSlice from './Slices/authSlice';
import todoSlice from './Slices/todoSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
  },
});
