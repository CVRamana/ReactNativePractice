import React, {Component} from 'react'
import {
    View,
    TextInput,
    Text,
    
} from 'react-native'
export default class StateManagement extends Component{
    constructor(props){
        super(props)
        this.state={
            input:''
        }

    }
    handleChangeInput=(text)=>{this.setState({input:text})

    }
    render(){
        const {input} = this.state
        return (
            <View style={{flex:1, justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <TextInput style={{height:40 ,borderColor:"grey" ,borderWidth:1,width:300}}
                onChangeText={this.handleChangeInput}
                value={input}
                />
                <Text>Hello how r u?? {this.state.input}</Text>
                </View>
        );
    }
}