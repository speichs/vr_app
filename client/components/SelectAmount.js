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

export default class Amount extends React.Component {
  static navigationOptions = { header:null}

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
    }
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        {
          this.state.show
            ? <View>
              <View style = {styles.container4}>
                <Text style={styles.greeting}>Specify an amount:</Text>
              </View>
              <View style = {styles.container5}>
                <TextInput style={styles.amount} placeholder="$" onChangeText={(text) => this.setState({text})}/>
              </View>
              <View style = {styles.container6}>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigate('Confirm', {donation: this.state.text})}>
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>Donate now!</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            : <View >
              <View style={styles.container2}>
                <Text style={styles.greeting}>Choose an amount:</Text>
              </View>
                <View style={styles.container3}>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigate('Confirm', {donation: 5})}>
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>$5</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigate('Confirm', {donation: 10})}>
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>$10</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigate('Confirm', {donation: 20})}>
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>$20</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigate('Confirm', {donation: 50})}>
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>$50</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigate('Confirm', {donation: 100})}>
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>$100</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={this.showOther}>
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>Other</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            }

        {/* {this.state.show ? <Select navigate={this.props.navigation}/> : <Custom navigate={this.props.navigation}/>} */}
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
    fontSize: 30,
    fontFamily: 'Avenir',
    color: '#ffffff'
  },
  amount: {
    fontSize: 30,
    height: 40,
    width: 200,
    color: '#000',
    fontFamily: 'Avenir',
    borderWidth: 2,
    borderColor: '#000'
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 30,
    marginLeft: 30,
    // height: 20,
    // width: 40,
    backgroundColor: '#f4e375',
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
    flex:1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  container5: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container6: {
    flex:1,
  },
});
