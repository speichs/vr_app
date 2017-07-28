import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View } from 'react-native';
import button from '../assets/buttons/buttons';
import titleFont from '../assets/font/font';
import colors from '../config/colors';
import fonts from '../config/fonts';

export default class Confirm extends React.Component {
  static navigationOptions = {
    header:null,
    title: 'BACK',
  };


  constructor(props) {
    super(props);
    this.state = {
      organization: 'Wildlife Protection Solutions',
      donation: 0
    };
  }

  componentWillMount(){
    console.log('in componentWillMount');
    fetch('https://reality-garage-server.herokuapp.com/confirm', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        }
    })
    .then(result=>result.json()).then((result)=>{
      console.log('logging from did mount')
      this.setState({donation: result.price})
    });
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.container3}>
          <Text style={titleFont}>Your Donation: ${this.state.donation}</Text>
          <View style={styles.marginFix}>
            <Text style={titleFont}>To: {this.state.organization}</Text>
          </View>
        </View>
        <View style={styles.container4}>
          <View style={styles.buttonMargin}>
            <TouchableOpacity  onPress={() => navigate('SelectAmount')}>
              <Text style={button}>Another Amount</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonMargin}>
            <TouchableOpacity  onPress={() => navigate('Card',{donation: this.state.donation})}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkgray,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  marginFix: {
    marginTop: -20,
  },
  footer: {
    fontSize: 15,
    fontFamily: fonts.MontserratThin,
    color: colors.white,
    paddingBottom: 10
  },
  garage: {
    fontFamily: fonts.MontserratLight,
  },
  container2: {
    flex:1,
    justifyContent: 'flex-end'
  },
  container3: {
    flex:3,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  container4: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom:15,
  },
  buttonMargin: {
    minWidth: 100,
    margin: 10,
  }
});
