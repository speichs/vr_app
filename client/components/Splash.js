import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Start extends React.Component {
  addAmount = ()=>{
    console.log('clicked', this.props.navigation.navigate);
    this.props.navigation.navigate('Amount')
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>Want to help?</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigate('Amount')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Donate now!</Text>
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
    backgroundColor: '#0d8ccb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting:{
    fontSize: 30,
    fontFamily: 'Avenir',
    color: '#ffffff',
  },
  button:{
    margin: 20,
    backgroundColor: '#f4e375',
    borderRadius: 25,
  }
});
