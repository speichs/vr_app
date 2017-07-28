import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import colors from '../config/colors';
import fonts from '../config/fonts';
import button from '../assets/buttons/buttons';
import titleFont from '../assets/font/font';


export default class Start extends React.Component {
  static navigationOptions = {header:null}
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.navigation.state.params.name
    }
  }

  makePost = (amount) => {
    let obj = {donation: amount};
    fetch('https://reality-garage-server.herokuapp.com/button', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
      }).then(result=>result.json()).then(result=>{
        console.log(result)})
  }

  changePage = () =>{
    const {navigate} = this.props.navigation;
    setTimeout(function() {
      navigate('Splash')
    }, 5000);
  }



  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          {this.makePost(0)}
          {this.changePage()}
          <Text style={titleFont}> Thanks for donating, {this.state.name}!</Text>
        </View>
        <View style={styles.container3}>
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
  footer: {
    fontSize: 15,
    fontFamily: fonts.MontserratThin,
    color: colors.white,
  },
  garage: {
    fontFamily: fonts.MontserratLight,
  },
  container2: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  container3: {
    flex:1,
    justifyContent: 'flex-end',
    paddingBottom: 10
  }
});
