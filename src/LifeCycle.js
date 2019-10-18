import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,props,
} from 'react-native';
export default class Lifecycle extends React.Component{
    constructor(props){
        super(props)
        this.state={
          time:''
        }
    }
    componentDidMount(){
      //  this.setState()  //causes reload->render->loop
      //on initila load
      // geolocation 
      // fetch API calls
    }
    handleClick=()=>{
     this.setState({
         time:(new Date()).getTime()
     })
    }
     shouldComponentUpdate(props,state)
     {
      return true
     }
     componentDidUpdate(){
// on future load
//on initila load
      // geolocation 
// this setState() can be cautios
     }
     componentWillUnMount(){
//component is leaving the screen
     }

    render(){
        return(
            <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                <Button title="Click Me"  onPress={this.handleClick} />
                <Text>{this.state.time}</Text>
            </View>
        )
    }
}