import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Store';

import AppWithNavigationState from './src/Navigation/RootNavigator';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('App', () => App)
