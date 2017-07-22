import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View } from 'react-native';

export default class Confirm extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    console.log('props', this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>Your Name</Text>
        <Text style={styles.greeting}>Organization Name</Text>
        <Text style={styles.greeting}>Your Donation: ${this.props.navigation.state.params.donation}</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigate('')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Pay Now</Text>
            </View>
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
  greeting:{
    fontSize: 30,
    fontFamily: 'Avenir',
    color: '#ffffff',
  },
  button:{
    marginTop: 20,
    marginBottom: 20,
    paddingRight: 50,
    paddingLeft: 50,
    backgroundColor: '#f4e375',
    borderRadius: 25,
  }
});
