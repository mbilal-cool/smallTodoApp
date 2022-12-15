import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './Src/utils/Redux/store';
import MainNavigation from './Src/Navigation/mainNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
