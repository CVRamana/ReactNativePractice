import React, {Component} from 'react'
import {
    View,} from 'react-native'

import Heading from './child_compo';

export default class ScreenOne extends Component {
    render () {
      return (
       <View style={{flex:1,
       justifyContent:"center",
       alignItems:"center",
       backgroundColor:"red"}}>
            <Heading message={'Custom Heading for Screen One'}/>
       </View>
      )
    }
  }
  
  // Child component
  
  