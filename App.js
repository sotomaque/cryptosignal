import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/Store';
import { Header, CryptoContainer } from './src/components';


export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={{backgroundColor: "#b9a4ff"}}>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}
