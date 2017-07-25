import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View, StatusBar, DatePickerIOS } from 'react-native';

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import { StackNavigator } from 'react-navigation';
import button from '../assets/buttons/buttons';
import colors from '../config/colors';
import fonts from '../config/fonts';

export default class Card extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        firstName: '',
        lastName: '',
        cardNumber: '',
        exp: '',
        cvc: '',
        zip: '',
    }
  }

  static navigationOptions = {header:null}
  addAmount = ()=>{
    console.log('clicked', this.props.navigation.navigate);
    this.props.navigation.navigate('Amount')
  }


  handleClick = () =>{
    var stripe_url = 'https://api.stripe.com/v1/'
    var secret_key = 'pk_test_zNnQiNYcPwaufUQMAWaN6fbC'
    var cardDetails = {
      "card[number]": 4242424242424242,
      "card[exp_month]": 10,
      "card[exp_year]": 20,
      "card[cvc]": 334
    }
    var formBody = [];
    for (var property in cardDetails) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(cardDetails[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch(stripe_url + 'tokens', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + 'pk_test_zNnQiNYcPwaufUQMAWaN6fbC'
      },
      body: formBody
    }).then(result=>result.json()).then(result=>console.log(result.id))
  }

  handleFirstName = () =>{
    // // console.log(text);
    // this.setState({firstName: text});
    console.log(this.state);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View>
          <FormLabel>First Name</FormLabel>
          <FormInput
             ref='firstName'
             placeholder='First Name'
             onChangeText={(ref) =>{this.setState({firstName:ref})}}></FormInput>

          <FormLabel>Last Name</FormLabel>
          <FormInput
          ref='lastName'
          placeholder='Last Name'
          onChangeText={(ref) =>{this.setState({lastName:ref})}}></FormInput>

          <FormLabel>Credit Card Number</FormLabel>
          <FormInput
          ref='cardNumber'
          placeholder='Credit Card Number'
          onChangeText={(ref) =>{this.setState({cardNumber:ref})}}></FormInput>

          <FormLabel>Exp</FormLabel>
          <FormInput
          ref='exp'
          placeholder='Expiration Date'
          onChangeText={(ref) =>{this.setState({exp:ref})}}></FormInput>

          <FormLabel>CVC</FormLabel>
          <FormInput
          ref='cvc'
          placeholder='CVC'
          onChangeText={(ref) =>{this.setState({cvc: ref})}}></FormInput>

          <FormLabel>Zip Code</FormLabel>
          <FormInput
          ref='zip'
          placeholder='Zip Code'
          onChangeText={(ref) =>{this.setState({zip: ref})}}></FormInput>

          <TouchableOpacity onPress = {()=>{this.handleFirstName()}}>
          <Text style={button}>Submit</Text>
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
    flexDirection: 'column',
  },
  subcontainer1: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting:{
    fontSize: 40,
    fontFamily: fonts.MontserratThin,
    color: colors.white,
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: fonts.MontserratThin,
    color: colors.yellow,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: colors.yellow,
    padding: 12,
    borderRadius: 25,
  },
  footer: {
    fontSize: 15,
    fontFamily: fonts.MontserratThin,
    color: colors.white,
    paddingBottom: 10,
  },
  garage: {
    fontFamily: fonts.MontserratLight,
  }
});
