import {store} from '../utils/Redux/store';
import {setUser, clearUser} from '../utils/Redux/Slices/authSlice';

import {
  saveTodoItems,
  addTodoItems,
  updateTodoItems,
  deleteTodoItems,
} from '../utils/Redux/Slices/todoSlice';
class ReduxDispatchController {
  static Auth = {
    SaveUserInRedux: user => {
      store.dispatch(setUser(user));
    },
    clearUserFromRedux: () => {
      store.dispatch(clearUser());
    },
  };
  static Todo = {
    saveTodoItemsInRedux: (res, noOfPage) => {
      store.dispatch(saveTodoItems({res, noOfPage}));
    },
    addTodoItemsInRedux: res => {
      store.dispatch(addTodoItems(res));
    },
    updateTodoItemsInRedux: res => {
      store.dispatch(updateTodoItems(res));
    },
    deleteTodoItemsInRedux: res => {
      store.dispatch(deleteTodoItems(res));
    },
  };
}
export default ReduxDispatchController;
