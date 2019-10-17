import React, { Component } from 'react'
import {
    View,
    TextInput,
    Text,

} from 'react-native'
export default class StateManagement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: "",
        }

    }
    handleChangeInput = (key, val) => {
        this.setState({ [key]: val })

    }
    render() {
        const { input } = this.state
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ marginTop: 50, paddingTop: 10, justifyContent:"center",alignItems:"center"}}>
                    <Text style={{marginBottom:30,fontSize:30}}>Login Form !!</Text>
                    <TextInput
                        style={{ height: 40, borderColor: "#000", borderWidth: 1, width: 300, paddingLeft: 5, placeholderColor: "#000" }}
                        onChangeText={(val) => this.handleChangeInput('name', val)}
                        value={this.state.name}
                        placeholder="Name"
                    />
                     <Text>
                        {this.state.name}
                    </Text>
                </View>
                <View style={{ marginTop: 10, padding: 10 }}>
                    <TextInput
                        style={{ height: 40, borderColor: "#000", borderWidth: 1, width: 300, paddingLeft: 5, placeholderColor: "#000" }}
                        onChangeText={(val) => this.handleChangeInput('email', val)}
                        value={this.state.email}
                        placeholder="Email"
                    />
                    <Text style={{marginBottom:20}}>
                        {this.state.email}
                    </Text>
                </View>
            </View>
        );
    }
}