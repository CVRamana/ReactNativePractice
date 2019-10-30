import React, { Component } from 'react';
import {View,Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native'

class componentName extends Component {
    state={
        enteredText:''
    }
    handleText=(text)=>{
        this.setState({
            enteredText:text
        })

    }

  render() {
    return (
      <View> 
          <TextInput style={styles.input}
          onChangeText={this.handleText}
          /> 
          <Text>{this.state.enteredText}</Text>
           
          </View>
    );
  }
}

export default componentName;
const styles=StyleSheet.create({
input:{
    height:30,
    width:250,
    paddingLeft: 10,
    backgroundColor:"white",borderRadius:10
}

})