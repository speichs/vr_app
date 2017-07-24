import React from 'react'
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Custom from './Custom';
import Select from './Select';
import button from '../assets/buttons/buttons';
import colors from '../config/colors';
import fonts from '../config/fonts';


export default class Amount extends React.Component {
  static navigationOptions = {header:null}

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      show: false
    };
  }
  showOther = () => {
    if (this.state.show) {
      this.setState({show: false});
    } else {
      this.setState({show: true});
      // .onFocus();
    }
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        {
          this.state.show
            ?
              <View>
                <View style={styles.container4}>
                  <Text style={styles.greeting}>Specify an amount:</Text>
                  <TextInput style={styles.amount} KeyboardType= {"numeric"} placeholder="$" placeholderTextColor = {colors.yellow} onChangeText={(text) => this.setState({text})} autoFocus={true} />
                  <TouchableOpacity onPress={() => navigate('Confirm', {donation: this.state.text})}>
                  <Text style={button}>Donate now!</Text>
                  </TouchableOpacity>
                </View>
                <View style = {styles.container5}>
                </View>
              </View>
            : <View >
              <View style={styles.container2}>
                <Text style={styles.greeting}>Choose an amount:</Text>
              </View>
                <View style={styles.container3}>
                  <View style={styles.buttonMargin}>
                    <TouchableOpacity onPress={() => navigate('Confirm', {donation: 5})}>
                      <View>
                        <Text style={button}>$5</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.buttonMargin}>
                    <TouchableOpacity onPress={() => navigate('Confirm', {donation: 10})}>
                      <View>
                        <Text style={button}>$10</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.buttonMargin}>
                    <TouchableOpacity onPress={() => navigate('Confirm', {donation: 20})}>
                      <View>
                        <Text style={button}>$20</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.buttonMargin}>
                    <TouchableOpacity onPress={() => navigate('Confirm', {donation: 50})}>
                      <View>
                        <Text style={button}>$50</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.buttonMargin}>
                    <TouchableOpacity onPress={() => navigate('Confirm', {donation: 100})}>
                      <View>
                        <Text style={button}>$100</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.buttonMargin}>
                    <TouchableOpacity onPress={this.showOther}>
                      <View>
                        <Text style={button}>Other</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            }
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
    backgroundColor: '#3a3b3e',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  greeting: {
    fontSize: 60,
    fontFamily: fonts.MontserratThin,
    color: colors.white,
  },
  amount: {
    flex: 3,
    fontSize: 60,
    height: 120,
    textAlign: 'center',
    color: colors.yellow,
    fontFamily: fonts.MontserratThin,
    // borderWidth: 2,
    // borderColor: colors.yellow,
    // borderBottomWidth: 10,
    // borderBottomColor: colors.yellow,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 30,
    marginLeft: 30,
    // height: 20,
    // width: 40,
    backgroundColor: colors.yellow,
    borderRadius: 25,
  },
  container2: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container3: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  container4: {
    flex:2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    // justifyContent: 'space-between',
  },
  container5: {
    flex:3,
  },
  buttonMargin: {
    minWidth: 100,
    margin: 10,
  },
  footer: {
    fontSize: 15,
    fontFamily: fonts.MontserratThin,
    color: colors.white,
    paddingBottom: 35,
  },
  garage: {
    fontFamily: fonts.MontserratLight,
  }
});
