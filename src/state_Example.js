import React, { Component } from 'react'
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    ScrollView

} from 'react-native'
export default class StateManagement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Fname: '',
            Lname: '',
            FatherName: '',
            MotherName: '',
            Address: '',
            District: '',
            States: '',
            Country: '',
            Mobile: '',
            email: "",
        }

    }
    handleChangeInput = (key, val) => {
        this.setState({ [key]: val })

    }
    render() {
        const { input } = this.state
        return (
            <ScrollView>
                <View style={{ flex: 1, alignItems: "center", backgroundColor: "pink" }}>
                    <View style={{ marginTop: 50, paddingTop: 10, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ marginBottom: 30, fontSize: 30 }}>Login Form !!</Text>
                        <TextInput
                            style={{
                                height: 40, borderColor: "#000",
                                borderWidth: 1, width: 300, paddingLeft: 10,
                                placeholderColor: "#000",
                                backgroundColor: "lightgrey",
                                borderRadius: 20
                            }}
                            clearTextOnFocus={true}
                            onChangeText={(val) => this.handleChangeInput('Fname', val)}
                            value={this.state.Fname}
                            placeholder="First Name"
                        />
                        <Text>
                            {this.state.Fname}
                        </Text>
                    </View>


                    <View style={{ marginTop: 10, paddingTop: 10, justifyContent: "center", alignItems: "center" }}>

                        <TextInput
                            style={{
                                height: 40, borderColor: "#000",
                                borderWidth: 1, width: 300, paddingLeft: 10,
                                placeholderColor: "#000",
                                backgroundColor: "lightgrey",
                                borderRadius: 20
                            }}
                            clearTextOnFocus={true}
                            onChangeText={(val) => this.handleChangeInput('Lname', val)}
                            value={this.state.Lname}
                            placeholder="Last Name"
                        />
                        <Text>
                            {this.state.Lname}
                        </Text>
                    </View>

                    <View style={{ marginTop: 10, paddingTop: 10, justifyContent: "center", alignItems: "center" }}>

                        <TextInput
                            style={{
                                height: 40, borderColor: "#000",
                                borderWidth: 1, width: 300, paddingLeft: 10,
                                placeholderColor: "#000",
                                backgroundColor: "lightgrey",
                                borderRadius: 20
                            }}
                            clearTextOnFocus={true}
                            onChangeText={(val) => this.handleChangeInput('FatherName', val)}
                            value={this.state.FatherName}
                            placeholder="Father's Name"
                        />
                        <Text>
                            {this.state.FatherName}
                        </Text>
                    </View><View style={{ marginTop: 10, paddingTop: 10, justifyContent: "center", alignItems: "center" }}>

                        <TextInput
                            style={{
                                height: 40, borderColor: "#000",
                                borderWidth: 1, width: 300, paddingLeft: 10,
                                placeholderColor: "#000",
                                backgroundColor: "lightgrey",
                                borderRadius: 20
                            }}
                            clearTextOnFocus={true}
                            onChangeText={(val) => this.handleChangeInput('MotherName', val)}
                            value={this.state.MotherName}
                            placeholder="Mother's Name"
                        />
                        <Text>
                            {this.state.MotherName}
                        </Text>
                    </View><View style={{ marginTop: 10, paddingTop: 10, justifyContent: "center", alignItems: "center" }}>

                        <TextInput
                            style={{
                                height: 40, borderColor: "#000",
                                borderWidth: 1, width: 300, paddingLeft: 10,
                                placeholderColor: "#000",
                                backgroundColor: "lightgrey",
                                borderRadius: 20
                            }}
                            clearTextOnFocus={true}
                            onChangeText={(val) => this.handleChangeInput('Address', val)}
                            value={this.state.Address}
                            placeholder="Address"
                        />
                        <Text>
                            {this.state.Address}
                        </Text>
                    </View><View style={{ marginTop: 10, paddingTop: 10, justifyContent: "center", alignItems: "center" }}>

                        <TextInput
                            style={{
                                height: 40, borderColor: "#000",
                                borderWidth: 1, width: 300, paddingLeft: 10,
                                placeholderColor: "#000",
                                backgroundColor: "lightgrey",
                                borderRadius: 20
                            }}
                            clearTextOnFocus={true}
                            onChangeText={(val) => this.handleChangeInput('District', val)}
                            value={this.state.name}
                            placeholder="District"
                        />
                        <Text>
                            {this.state.District}
                        </Text>
                    </View>



                    <View style={{ marginTop: 10, paddingTop: 10, justifyContent: "center", alignItems: "center" }}>

                        <TextInput
                            style={{
                                height: 40, borderColor: "#000",
                                borderWidth: 1, width: 300, paddingLeft: 10,
                                placeholderColor: "#000",
                                backgroundColor: "lightgrey",
                                borderRadius: 20
                            }}
                            clearTextOnFocus={true}
                            onChangeText={(val) => this.handleChangeInput('States', val)}
                            value={this.state.States}
                            placeholder="States"
                        />
                        <Text>
                            {this.state.States}
                        </Text>
                    </View><View style={{ marginTop: 10, paddingTop: 10, justifyContent: "center", alignItems: "center" }}>

                        <TextInput
                            style={{
                                height: 40, borderColor: "#000",
                                borderWidth: 1, width: 300, paddingLeft: 10,
                                placeholderColor: "#000",
                                backgroundColor: "lightgrey",
                                borderRadius: 20
                            }}
                            clearTextOnFocus={true}
                            onChangeText={(val) => this.handleChangeInput('Country', val)}
                            value={this.state.Country}
                            placeholder="Country"
                        />
                        <Text>
                            {this.state.Country}
                        </Text>
                    </View>



                    <View style={{ marginTop: 10, paddingTop: 10, justifyContent: "center", alignItems: "center" }}>

                        <TextInput
                            style={{
                                height: 40, borderColor: "#000",
                                borderWidth: 1, width: 300, paddingLeft: 10,
                                placeholderColor: "#000",
                                backgroundColor: "lightgrey",
                                borderRadius: 20
                            }}
                            clearTextOnFocus={true}
                            onChangeText={(val) => this.handleChangeInput('Mobile', val)}
                            value={this.state.Mobiles}
                            placeholder="Mobile Number"
                        />
                        <Text>
                            {this.state.Mobile}
                        </Text>
                    </View>


                    <View style={{ marginTop: 10, padding: 10, justifyContent: "center", alignItems: "center" }}>
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: "#000",
                                borderWidth: 1, width: 300,
                                paddingLeft: 10,
                                placeholderColor: "#000",
                                backgroundColor: "lightgrey",
                                borderRadius: 20
                            }} clearTextOnFocus={true}
                            onChangeText={(val) => this.handleChangeInput('email', val)}
                            value={this.state.email}
                            placeholder="Email"

                        />
                        <Text style={{ marginBottom: 20 }}>
                            {this.state.email}
                        </Text>
                        <TouchableOpacity style={{
                            backgroundColor: "green",
                            width: 200,
                            height: 50,
                            justifyContent: "center",
                            borderRadius: 20,
                            alignItems: "center"
                        }}>
                            <Text >Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}