
import React, {Component} from 'react';
import { StyleSheet, Text,View } from 'react-native';
import CustomButton from '../src/CustomButton'
export default class Component_State_Prop extends React.Component{
constructor(){
    super()
        this.state={
            pcount:0
        }

}
addProduct=()=>{
    this.setState({
      pcount: this.state.pcount+1
    })
    this.setState({
        pcount: this.state.pcount+1
      })
      this.setState({
        pcount: this.state.pcount+1
      })
      this.setState({
        pcount: this.state.pcount+1
      })
      //setState is asyncronous method and update the state in batches 
      // so no issue on writing the multiplle setState() 
}
render(){
    return (
        <View style={styles.container}>
            <CustomButton onPress={this.addProduct} /> 
            <Text>{this.state.pcount}</Text>
        </View>
    )
}
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})
