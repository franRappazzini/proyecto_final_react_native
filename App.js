import {init, initFav} from './src/utils/services/sql';

import AppNavigation from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import React from 'react';
import RootReducer from './src/redux/storage/RootReducer';

init()
  .then(() => console.log('SQLite Initialized'))
  .catch(err => console.log('SQLite ERROR: ', err));

initFav()
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
