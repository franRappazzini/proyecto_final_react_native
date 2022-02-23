import AppNavigation from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import React from 'react';
import RootReducer from './src/redux/storage/RootReducer';
import {init} from './src/utils/services/sql';

init()
  .then(() => console.log('SQLite Initialized'))
  .catch(err => console.log('SQLite ERROR: ', err));

const App = () => {
  return (
    <Provider store={RootReducer}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
