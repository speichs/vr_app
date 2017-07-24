import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View } from 'react-native';
import button from '../assets/buttons/buttons';
import titleFont from '../assets/font/font';
import colors from '../config/colors';
import fonts from '../config/fonts';

export default class Confirm extends React.Component {
  static navigationOptions = {header:null}

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
        <Text style={titleFont}>Your Donation: ${this.props.navigation.state.params.donation}</Text>
        <View style={styles.marginFix}>
          <Text style={titleFont}>To: {this.state.organization}</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity  onPress={() => navigate('Thanks')}>
              <Text style={button}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a3b3e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginFix: {
    marginTop: -20,
  }
});
