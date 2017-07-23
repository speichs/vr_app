import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import colors from '../config/colors';
import fonts from '../config/fonts'


export default class Start extends React.Component {
  static navigationOptions = { header:null}
  addAmount = ()=>{
    console.log('clicked', this.props.navigation.navigate);
    this.props.navigation.navigate('Amount')
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
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
    backgroundColor: colors.darkgray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting:{
    fontSize: 30,
    fontFamily: fonts.MontserratThin,
    color: colors.white,
  },
  button:{
    margin: 20,
    backgroundColor: colors.yellow,
    borderRadius: 25,
  }
});
