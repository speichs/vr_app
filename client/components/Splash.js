import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View, StatusBar } from 'react-native';

export default class Start extends React.Component {
  static navigationOptions = { header:null}
  addAmount = ()=>{
    this.props.navigation.navigate('Amount')
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.greeting}>Want to help?</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigate('SelectAmount')}>
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
    margin: 20,
    backgroundColor: '#f4e375',
    borderRadius: 25,
  }
});
