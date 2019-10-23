import React, { Component } from 'react';
import {StyleSheet,Text,View,props,TextInput,Button} from 'react-native'
import Normal_Comp from '../src/Normal_Comp'
import Pure_Comp from '../src/Pure_Comp';
class Pure_Normal extends Component {
    constructor(props){
        super(props)
        this.state={
            textinput:"",
            person:{name:"Ram",age:20}
        }
    }
    onupdateName=()=>
    {
var person=this.state.person
person.name=this.state.textinput
this.setState({
    person:person
})
    }

    onupdateAge=()=>
    {
        var person=this.state.person
        person.age=this.state.age
        this.setState({
            person:person
        })

    }

  render() {
    return (
     <View style={styles.parent_container}>
         <TextInput style={styles.textinput1} onChangeText={(text)=>{this.setState({
             textinput:text

         }) }} />
         <Button title="Update Name" onPress={this.onupdateName}/>
         <Button title="Update Age" onpress={this.onupdateAge} />
        
         < Normal_Comp 
         text={this.state.textinput}
          person={this.state.person} />
         <Pure_Comp 
         text={this.state.textinput}
         person={this.state.person}
          
          />
       
         
     </View>
    );
  }
}

export default Pure_Normal;
const styles=StyleSheet.create({
    parent_container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    conatainer1:{

    },
    container2:{

    },
    textinput1:{
        borderBottomWidth:2,
        height:30, width:300,
         borderBottomColor: "black",
        }
})