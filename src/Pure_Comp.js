import React, { Component } from 'react';
import {View,TextInput,Text } from 'react-native'

class Pure_Comp extends React.PureComponent {
  render() {
    return (
      <View>
          <Text>Pure Component</Text>
    <Text>{this.props.text}</Text>
    <Text>{this.props.person.name}</Text>
    <Text>{this.props.person.age}</Text>
      </View>
    );
  }
}

export default Pure_Comp;
