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
        id: 0,
        name: '',
        email: '',
        password: '',
        editIndex: -1,
        empData: []
    }
    // for handling the TextInput

    handleTextState = (key, val) => {
        this.setState({ [key]: val })
    }

    handleState = () => {
        let name = this.state.name
        let email = this.state.email
        let password = this.state.password
        if (name == "" || email == "" || password == "") {
            console.log(alert("Please fill the empty field"))
            return
        }
        let payload = {
            id: new Date().getTime(),
            name: name,
            email: email,
            password: password
        };

        let empData = this.state.empData;
        empData.push(payload);
        this.setState({
            empData: empData,
            name: '',
            email: '',
            password: '',
            id: ""
        })

    }
    handleUpdate = () => {
        let empData = this.state.empData;

        empData[this.state.editIndex] = {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            editIndex: -1,
        }

        this.setState({
            id: "",
            name: "",
            email: "",
            password: "",
            empData: empData
        })
    }

    handleDelete = (id) => {

        let empData = this.state.empData.filter(item => item.id != id)
        this.setState({ empData: empData })
    }
    handleEdit = (item) => {
        let index = this.state.empData.findIndex(items => items.id == item.id)
        if (index != -1) {
            this.setState({
                id: item.id,
                name: item.name,
                email: item.email,
                password: item.password,
                editIndex: index
            })
        }
        console.warn("edit index", this.state.editIndex)

    }
    render() {
        console.warn("rowData", this.state.empData)
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
                        {
                            this.state.editIndex === -1 ?
                                < TouchableOpacity
                                    style={styles.buttton}
                                    onPress={this.handleState}
                                >
                                    <Text style={{ fontSize: 20 }}>Click Me</Text>
                                </TouchableOpacity>
                                :
                                < TouchableOpacity
                                    style={styles.buttton}
                                    onPress={this.handleUpdate}
                                >
                                    <Text style={{ fontSize: 20 }}>Update</Text>
                                </TouchableOpacity>

                        }

                        {/* <Text>{this.state.name}</Text>
                <Text>{this.state.status}</Text> */}
                    </View>

                    <View style={styles.container2}>
                        <Text style={{ textAlign: "center", fontSize: 20 }}></Text>

                        <FlatList
                            data={this.state.empData}
                            renderItem={(rowData) => {

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

                                        <TouchableOpacity
                                            style={styles.editButton}
                                            onPress={() => this.handleEdit(rowData.item)}
                                        >
                                            <Text style={{ color: "yellow" }}>Edit</Text>
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
        backgroundColor: "powderblue",
        paddingTop: 50,
        paddingLeft: 40,
        paddingBottom: 30,
        borderRadius: 20

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
        elevation: 13

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
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10

    },
    editButton: {
        width: 50,
        height: 30,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,

    }

})