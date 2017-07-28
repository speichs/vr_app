import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import colors from '../config/colors';
import fonts from '../config/fonts';
import button from '../assets/buttons/buttons';
import titleFont from '../assets/font/font';


export default class Start extends React.Component {
  static navigationOptions = { header:null}

  componentDidMount(){
     let that = this
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
        console.log(data)
        that.setState({donation:data.price});
        that.checkDonation(data);
      })
    }//end of subscribe function
    var data = subscribe("https://reality-garage-server.herokuapp.com/poll");
  }

  checkDonation = (data) => {
    var { navigate } = this.props.navigation;
    if(data.price!==10){
      navigate('Confirm');
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.subcontainer1}>
          <Text style={titleFont}>Please put on the headset to begin.</Text>
          <View>
          </View>
        </View>
        <View>
          <Text style={styles.footer}>Powered By:
            <Text style={styles.garage}> REALITY GARAGE
            </Text>
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
    justifyContent: 'center',
    flexDirection: 'column',
  },
  subcontainer1: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting:{
    fontSize: 60,
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
