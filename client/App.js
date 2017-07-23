import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View, AppRegistry } from 'react-native';
import { Root } from './config/router';
import { Font, AppLoading } from 'expo';

export default class App extends React.Component {
  state = {
    fontsAreLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf')
    })

    this.setState({fontsAreLoaded: true})
  }
  render() {
    if (this.state.fontsAreLoaded) {
     return <Root />;
   }
   return null
  }
}
