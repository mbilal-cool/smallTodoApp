import {navigate} from '../Navigation/mainNavigation';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReduxDispatchController from './reduxDispatchController';
const setUserinRedux = user => {
  ReduxDispatchController.Auth.SaveUserInRedux(user);
};
class AuthController {
  static USER_ASYNC_KEY = 'STORAGE_KEY';
  static bearerToken = '';

  static handleRegisterUser = (user, _call_back) => {
    AuthController.RegisterUserRequest(user)
      .then(res => {
        console.log(res.data);
        if (res.data.success) {
          _call_back(res.data);
          navigate('LoginScreen');
        } else {
          _call_back(res.data.error.message);
        }
      })
      .catch(err => {
        console.log(err);
        _call_back(err);
      });
  };

  static RegisterUserRequest = user => {
    let formData = new FormData();
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('password_confirmation', user.confirmPassword);

    // console.log('forrrmmmmmmmmdata', formData);
    // console.log(obj);
    return new Promise((resolve, reject) => {
      axios({
        url: `http://3.232.244.22/api/register`,
        data: formData,
        headers: {
          'content-type': 'multipart/form-data',
        },
        method: 'POST',
      })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject('Network Error');
        });
    });
  };
  static handleLogin = (obj, _call_back) => {
    AuthController.requestLogin(obj)
      .then(res => {
        if (res.data.success) {
          console.log(' user data ??????', res.data.user);
          AuthController.persistUserAndAuthenticate(res.data.user)
            .then(dataIsSaved => {
              console.log(dataIsSaved, '??????');
              _call_back(res.data);

              navigate('AppStack');
            })
            .catch(err => _call_back(err));
        } else {
          _call_back(res.data.error.message);
        }
      })
      .catch(err => {
        console.log(err);

        _call_back(err);
      });
  };

  static requestLogin = obj => {
    let formData = new FormData();
    formData.append('email', obj.email);
    formData.append('password', obj.password);
    // console.log('forrrmmmmmmmmdata', formData);
    return new Promise((resolve, reject) => {
      axios({
        url: `http://3.232.244.22/api/login`,
        data: formData,
        headers: {
          'content-type': 'multipart/form-data',
        },
        method: 'POST',
      })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject('NetworkError');
        });
    });
  };

  static persistUserAndAuthenticate = user => {
    return new Promise((resolve, reject) => {
      AsyncStorage.setItem(this.USER_ASYNC_KEY, JSON.stringify(user))
        .then(res => {
          setUserinRedux(user);
          axios.defaults.headers.common = {
            Authorization: `Bearer ${user.token}`,
          };
          resolve(true);
        })
        .catch(err => reject(err));
    });
  };

  static handleRestoreUserAndAuthenticate = () => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(this.USER_ASYNC_KEY)
        .then(res => {
          if (res) {
            let parsedUserObject = JSON.parse(res);

            axios.defaults.headers.common = {
              Authorization: `Bearer ${parsedUserObject.token}`,
            };

            setUserinRedux(JSON.parse(res));
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(err => reject(err));
    });
  };
  static handleLogoutUser = () => {
    AuthController.logoutUser()
      .then(res => {
        if (res) {
          navigate('LoginScreen');
        }
      })
      .catch(err => console.log(err));
  };
  static logoutUser = () => {
    return new Promise((resolve, reject) => {
      AsyncStorage.removeItem(this.USER_ASYNC_KEY)
        .then(res => {
          ReduxDispatchController.Auth.clearUserFromRedux();
          resolve(true);
        })
        .catch(err => reject(err));
    });
  };
}

export default AuthController;
