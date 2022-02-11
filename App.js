/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import AppNavigation from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import React from 'react';
import RootReducer from './src/redux/storage/RootReducer';

const App = () => {
  return (
    <Provider store={RootReducer}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
