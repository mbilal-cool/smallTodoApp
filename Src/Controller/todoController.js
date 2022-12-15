import ReduxDispatchController from './reduxDispatchController';
import axios from 'axios';
class TodoController {
  static getTodoItemsHandler = (initialPageValue, call_back) => {
    TodoController.getTodoItemsRequest(initialPageValue)
      .then(res => {
        call_back(false);
      })
      .catch(err => console.log(err));
  };
  static getTodoItemsRequest = initialPageValue => {
    console.log('init', initialPageValue);
    return new Promise((resolve, reject) => {
      axios
        .get(`http://3.232.244.22/api/items?page=${initialPageValue}`)

        .then(response => {
          if (response.data.success) {
            ReduxDispatchController.Todo.saveTodoItemsInRedux(
              response.data.items.data,
              response.data.items.last_page,
            );
            resolve(response.data);
          } else {
            reject(response.data.message);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  static createTodoHandler = (obj, call_back) => {
    TodoController.createTodoItemsRequest(obj)
      .then(res => {
        call_back(false);
      })
      .catch(err => console.log(err));
  };
  static createTodoItemsRequest = obj => {
    return new Promise((resolve, reject) => {
      let formData = new FormData();
      formData.append('title', obj.title);
      formData.append('description', obj.description);

      axios({
        url: `http://3.232.244.22/api/item`,
        data: formData,
        headers: {
          'content-type': 'multipart/form-data',
        },
        method: 'POST',
      })
        .then(response => {
          if (response.data.success) {
            ReduxDispatchController.Todo.addTodoItemsInRedux(
              response.data.item,
            );
            resolve(response.data);
          } else {
            reject(response.data.message);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  static updateTodoItemsHandler = (obj, call_back) => {
    TodoController.updateTodoItemsRequest(obj)
      .then(res => {
        call_back(false);
      })
      .catch(err => console.log(err));
  };
  static updateTodoItemsRequest = obj => {
    return new Promise((resolve, reject) => {
      axios
        .put(`http://3.232.244.22/api/item/${obj.id}`, {
          title: obj.title,
          description: obj.description,
        })
        .then(response => {
          if (response.data.success) {
            ReduxDispatchController.Todo.updateTodoItemsInRedux(
              response.data.item,
            );
            resolve(response.data);
          } else {
            reject(response.data.message);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  static deleteTodoItemsHandler = (id, call_back) => {
    TodoController.deleteTodoItemsRequest(id)
      .then(res => {
        call_back(false);
      })
      .catch(err => console.log(err));
  };
  static deleteTodoItemsRequest = id => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`http://3.232.244.22/api/item/${id}`)
        .then(response => {
          if (response.data.success) {
            ReduxDispatchController.Todo.deleteTodoItemsInRedux(id);
            resolve(response.data);
          } else {
            reject(response.data.message);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  };
}
export default TodoController;
