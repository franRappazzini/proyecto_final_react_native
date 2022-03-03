import React, {useEffect} from 'react';
import {init, initFav} from './src/utils/services/sql';

import AppNavigation from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import RootReducer from './src/redux/storage/RootReducer';
import SplashScreen from 'react-native-splash-screen';

init()
  .then(() => console.log('SQLite Initialized'))
  .catch(err => console.log('SQLite ERROR: ', err));

initFav()
  .then(() => console.log('SQLite Initialized'))
  .catch(err => console.log('SQLite ERROR: ', err));

const App = () => {
  useEffect(() => {
    // espera 2" para esperar a sqlite
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <Provider store={RootReducer}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
