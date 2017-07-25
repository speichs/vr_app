import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View } from 'react-native';
import styles from '../assets/StyleSheet';
import titleFont from '../assets/font/font';
import fonts from '../config/fonts';
import colors from '../config/colors';

export default class Confirm extends React.Component {
  static navigationOptions = {
  headerStyle: {
    height: 25,
    backgroundColor: colors.darkgray,
  },
  headerBackTitleStyle: {
    fontFamily: fonts.MontserratLight
  },
  headerTintColor: colors.yellow,
  headerTitleStyle: {
    fontFamily: fonts.MontserratLight,
   },
};


  constructor(props) {
    super(props);
    this.state = {
      organization: 'Wildlife Protection Solutions'
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.container3}>
          <Text style={titleFont}>Your Donation: ${this.props.navigation.state.params.donation}</Text>
          <View style={styles.marginFix}>
            <Text style={titleFont}>To: {this.state.organization}</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity  onPress={() => navigate('Card')}>
              <Text style={button}>Pay Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container2}>
          <Text style={styles.footer}>Powered By:
            <Text style={styles.garage}> REALITY GARAGE</Text>
          </Text>
        </View>
      </View>
    );
  }
}
