import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import Timer from './components/Timer'; //Timer 파일과 연동과정 
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';

let store = createStore(reducer)

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
      <Provider store={store}>
        <Timer/>
      </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
