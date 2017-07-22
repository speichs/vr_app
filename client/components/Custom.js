import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Custom extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text style={styles.greeting}>Specify an amount:</Text>
        <TextInput
         style={styles.amount}
         placeholder="$"
         onChangeText={(text) => this.setState({text})}
       />
       <View style={styles.button}>
         <TouchableOpacity onPress={()=>navigate('Confirm', {donation: this.state.text})}>
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
    flexDirection: 'column',
  },
  greeting:{
    // marginTop: 250,
    fontSize: 30,
    // fontFamily: 'Avenir',
    color: '#ffffff',
  },
  amount:{
    fontSize: 30,
    height: 40,
    // margin: 20,
    width: 200,
    color: '#073e87',
    // borderWidth: 2,
    borderColor: 'rgb(6, 7, 74)'
  },
  button:{
    margin: 20,
    backgroundColor: '#f4e375',
    borderRadius: 25,
    // width: 100
  },
  donateContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: -250
  }
});
