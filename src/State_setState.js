import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput
} from 'react-native'
export default class ScreenOne extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }
    // for handling the TextInput

    handleTextState = (key, val) => {
        this.setState({ [key]: val })
    }
    handleState = (name,email,password) => {
        this.setState({
            name: name,
            email: email,
            password: password,
            //finalText: currentSate
        })
    }

    render() {
        return (
            <View style={styles.Parentcontainer}>
                <View style={styles.container1}>
                    <TextInput style={styles.textfield}
                        placeholder="Enter your name"
                        //doesn't matter u can write value after the 'onchangeText'
                        value={this.state.name}
                        onChangeText={
                            (val) => {
                                this.handleTextState('name', val)
                            }
                        }
                    />

                    <TextInput style={styles.textfield}
                        placeholder="Email"
                        //doesn't matter u can write value after the 'onchangeText'
                        value={this.state.email}
                        onChangeText={
                            (val) => {
                                this.handleTextState('email', val)
                            }
                        }
                    />


                    <TextInput style={styles.textfield}
                        placeholder="Password"
                        //doesn't matter u can write 'value' after the 'onchangeText'
                        value={this.state.password}
                        onChangeText={
                            (val) => {
                                this.handleTextState('password', val)
                            }
                        }
                    />

                    < TouchableOpacity
                        style={styles.buttton}
                        onPress={() => this.handleState(
                            this.state.name,
                            this.state.email,
                            this.state.password)}
                    >
                        <Text style={{ fontSize: 20 }}>Click Me</Text>
                    </TouchableOpacity>
                    {/* <Text>{this.state.name}</Text>
                <Text>{this.state.status}</Text> */}
                </View>

                <View style={styles.container2}>
                    <Text style={{ textAlign: "center", fontSize:20 }}>Your entered Data is as follows :</Text>
                    <Text>{this.state.name}</Text>
                    <Text>{this.state.email}</Text>
                    <Text>{this.state.password}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    Parentcontainer: {
        flex: 1
    },
    container1: {
        flex: 1,
        backgroundColor: "skyblue",
        paddingTop: 100,
        paddingLeft: 40,

    },
    container2: {
        flex: 1,
        backgroundColor: "pink",
        paddingTop: 20,
        paddingLeft: 40,

    },
    textfield: {
        height: 50,
        width: 300,
        fontSize: 20,
        borderColor: 'grey',
        borderRadius: 20,
        borderWidth: 1,
        paddingLeft: 20,
        marginBottom: 30,
        backgroundColor: "white"
    },
    buttton: {
        backgroundColor: "green",
        width: 200,
        height: 50,
        marginLeft: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    }
})