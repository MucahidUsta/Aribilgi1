
import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './navigator/AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
