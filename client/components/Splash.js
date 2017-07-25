import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import colors from '../config/colors';
import fonts from '../config/fonts';
import button from '../assets/buttons/buttons';
import titleFont from '../assets/font/font';


export default class Start extends React.Component {
  static navigationOptions = { header:null}

  constructor(props) {
    super(props);
    this.state = {
      organization: 'Wildlife Protection Solutions',
      donation: ''
    };
  }

  componentDidMount(){
    fetch('http://localhost:5000/', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(result=>result.json()).then(result=>{
      console.log('hello');
      let amount = result.amount[0];
      this.setState({donation: amount})})
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.subcontainer1}>
          <Text style={titleFont}>Want to help? g {this.state.donation} </Text>
          <View>
            <TouchableOpacity  onPress={
              () => navigate('SelectAmount')}
            >
              <View>
                <Text style={button}>Donate now!</Text>
              </View>
            </TouchableOpacity>
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
