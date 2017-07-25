import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../assets/StyleSheet';
import titleFont from '../assets/font/font';


export default class Start extends React.Component {
  static navigationOptions = { header:null}

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.subcontainer1}>
          <Text style={titleFont}>Want to help?</Text>
          <View>
            <TouchableOpacity  onPress={
              () => navigate('SelectAmount')}
            >
              <View>
                <Text style={button}>Donate now!</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.footer}>Powered By:
            <Text style={styles.garage}> REALITY GARAGE
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}
