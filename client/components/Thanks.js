import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import button from '../assets/buttons/buttons';
import titleFont from '../assets/font/font';
import styles from '../assets/StyleSheet';



export default class Start extends React.Component {
  static navigationOptions = {header:null}
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.navigation.state.params.name
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>

          <Text style={titleFont}> Thanks for donating, {this.state.name}!</Text>
        </View>
        <View style={styles.container3}>
          <Text style={styles.footer}>Powered By:
            <Text style={styles.garage}> REALITY GARAGE
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}
