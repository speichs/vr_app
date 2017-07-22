
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View, AppRegistry } from 'react-native';
import { Root } from './config/router';


export default class App extends React.Component {
  render() {
     return <Root />;
  }
}
