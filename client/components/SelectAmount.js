import React from 'react'
import Keyboard from 'elizabeth-tas-numpad';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import button from '../assets/buttons/buttons';
import titleFont from '../assets/font/font';
import colors from '../config/colors';
import styles from '../assets/StyleSheet';

let model = {
    _keys: [],
    _listeners: [],
    addKey(key) {
        this._keys.push(key);
        this._notify();
    },
    delKey() {
        this._keys.pop();
        this._notify();
    },
    clearAll() {
        this._keys = [];
        this._notify();
    },
    getKeys() {
        return this._keys;
    },
    onChange(listener) {
        if (typeof listener === 'function') {
            this._listeners.push(listener);
        }
    },
    _notify() {
        this._listeners.forEach((listner) => {
            listner(this);
        });
    }
};



export default class Amount extends React.Component {
  static navigationOptions = {
    header:null,
    title: 'BACK',
  }

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      show: false
    };
  }
  _handleClear() {
      model.clearAll();
  }
  _handleDelete() {
      model.delKey();
  }
  _handleKeyPress(key) {
      model.addKey(key);
  }

  showOther = () => {
    if (this.state.show) {
      this.setState({show: false});
    } else {
      this.setState({show: true});
      model.onChange((model) => {
            this.setState({text: model.getKeys().join('')});
        });
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
                  <Text style={titleFont}>Specify an amount:</Text>
                  <TextInput style={styles.amount} placeholder="$" placeholderTextColor = {colors.yellow} onChangeText={(text) => this.setState({text})} value={this.state.text}/>
                  <TouchableOpacity onPress={() => navigate('Confirm', {donation: this.state.text})}>
                  <Text style={button}>Donate now!</Text>
                  </TouchableOpacity>
                </View>
                <View style = {styles.container5}>
                <Keyboard
                style = {styles.keyboard}
                keyboardType="decimal-pad"
                onClear={this._handleClear.bind(this)}
                onDelete={this._handleDelete.bind(this)}
                onKeyPress={this._handleKeyPress.bind(this)}
                />
                </View>
              </View>
            : <View >
              <View style={styles.container2}>
                <Text style={titleFont}>Choose an amount:</Text>
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
