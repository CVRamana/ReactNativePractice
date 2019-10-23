import React, { Component } from 'react';
import {View,Text} from 'react-native'
class Normal_Comp extends Component {
  render() {
    return (
        <View>
            <Text>Normal Componet</Text>
        <Text>{this.props.text}</Text>
        <Text>{this.props.person.name}</Text>
          </View>
    );
  }
}

export default Normal_Comp;
