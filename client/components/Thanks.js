import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import colors from '../config/colors';
import fonts from '../config/fonts';
import button from '../assets/buttons/buttons';
import titleFont from '../assets/font/font';


export default class Start extends React.Component {
  static navigationOptions = { header:null}
  constructor(props) {
    super(props);
    this.state = {
      name: 'Elizabeth'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={titleFont}> Thanks for donating, {this.state.name}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkgray,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
