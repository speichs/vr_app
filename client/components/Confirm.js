import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View } from 'react-native';
import button from '../assets/buttons/buttons';
import titleFont from '../assets/font/font';
import colors from '../config/colors';
import fonts from '../config/fonts';


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
      organization: 'Wildlife Protection Solutions',
      donation: ''
    };
  }

  componentDidMount(){
     let that = this
    // let socket = io('https://vr-test-rg.herokuapp.com')
    // socket.on('amount', function(data){
    //   console.log('hey you arrived at the socket on function')
    //   that.setState({donation: data})
    // })
      async function subscribe(path) {
      const response = await fetch(path, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });

      setTimeout(function() {
        subscribe("https://reality-garage-server.herokuapp.com/poll");
      }, 3000);
      return await response.json().then(function(data){
        that.setState({donation:data.text});
      })
    }//end of subscribe function
    var data = subscribe("https://reality-garage-server.herokuapp.com/poll");
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
          <View style={styles.button}>
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
    flex:2,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});
