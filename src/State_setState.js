import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    FlatList, ScrollView
} from 'react-native'
export default class ScreenOne extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        empData: []
    }
    // for handling the TextInput

    handleTextState = (key, val) => {
        this.setState({ [key]: val })
    }

    handleState = () => {
        let name=this.state.name
        let email=this.state.email
        let password=this.state.password
        if(name=="" || email=="" || password==""){
            console.log(alert("Please fill the empty field"))
            return
        }
        let payload = {
            id:new Date().getUTCMilliseconds(),
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        
        let empData = this.state.empData.concat(payload);
        // empData = empData.concat(payload)
        this.setState({ empData: empData })
    }

    handleDelete = (id) => {
        // console.warn(id);
        let updatedArray = []
        let temp = this.state.empData

        // console.warn("index",index);
        // console.warn("updatedArray", this.state.empData);

        let i = 0
        for (i = 0; i < temp.length - 1; i++) {
            if (temp[i].id != id) {
                updatedArray.push(temp[i])
            }

        }
        this.setState({ empData: updatedArray })
    }

    render() {
        return (
            <ScrollView>
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
                            onPress={this.handleState}
                        >
                            <Text style={{ fontSize: 20 }}>Click Me</Text>
                        </TouchableOpacity>
                        {/* <Text>{this.state.name}</Text>
                <Text>{this.state.status}</Text> */}
                    </View>

                    <View style={styles.container2}>
                        <Text style={{ textAlign: "center", fontSize: 20 }}></Text>

                        <FlatList
                            data={this.state.empData}
                            renderItem={(rowData) => {
                                console.warn("rowData", rowData)
                                return (
                                    <View style={{ backgroundColor: "pink", borderRadius: 20, marginBottom: 10, padding: 20 }}>
                                        <Text>{rowData.item.name}</Text>
                                        <Text>{rowData.item.email}</Text>
                                        <Text>{rowData.item.password}</Text>
                                        <TouchableOpacity
                                            style={styles.deleteButton}
                                            onPress={() => this.handleDelete(rowData.item.id)}
                                        >
                                            <Text style={{ color: "red" }}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>)
                            }}
                            keyExtractor={(item, index) => index.toString()}
                        />

                    </View>

                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({

    Parentcontainer: {
        flex: 1
    },
    container1: {
        flex: 1,
        backgroundColor: "pink",
        paddingTop: 50,
        paddingLeft: 40,
        paddingBottom: 30,
        borderRadius:20

    },
    container2: {
        flex: 1,
        margin: 15,
        shadowOffset: { width: 10, height: 10, },
        shadowColor: 'black',
        shadowOpacity: 0.8,
        borderRadius: 10,
        // backgroundColor: "pink",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 40,
        paddingRight: 40,
        elevation: 12

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
    },
    deleteButton: {
        width: 50,
        height: 30,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10

    }
})