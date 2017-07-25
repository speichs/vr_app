import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View, StatusBar, DatePickerIOS, ScrollView } from 'react-native';
import { CreditCardInput } from "react-native-credit-card-input";
import { StackNavigator } from 'react-navigation';
import colors from '../config/colors';
import fonts from '../config/fonts';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shannon",
      email: "me@this.com",
      ZIP: '80302',
      form: {
        values: {
          number: "",
          expiry: "",
          cvc: "",
        }
      }
    };
  }

  static navigationOptions = { header:null}
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

  // handleFirstName = (text) =>{
  //   console.log(text)
  // }


  onChange = (form) => {
   this.setState({form: form});
   console.log('state', this.state.form);
 }




  render() {
    return(
      <View>
        <CreditCardInput onChange={this.onChange} />
        <View>
          <TouchableOpacity  onPress={
           () => navigate('Card')}
        //    ()=> Alert.alert('Please see a representative for further assistance')
        //  }
          >
            <View>
              <Text style={styles.buttonText}> Donate now!</Text>
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
    color: colors.blue,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: colors.blue,
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
