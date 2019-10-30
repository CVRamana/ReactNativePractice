import React, {Component} from 'react';
import { StyleSheet, Text,Button } from 'react-native';

const CustomButton=(props)=>{
    return (
        <Button title="Click me" onPress={()=>{props.onPress() 
        }}/>
    )
}
export default CustomButton