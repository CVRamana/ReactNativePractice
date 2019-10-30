import React, { Component } from 'react';
import {
    View, Text, TextInput, StyleSheet, ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native'
import ReactFlat_input from '../src/ReactFlat_input'
import ReactFlat_Card from '../src/ReactFlat_Card';
import axios from 'axios'
export default class ReactFlat11 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            payload: [],
            seachKey: ""
        };
    };

    componentDidMount() {
        axios.get("https://reqres.in/api/users?page=2")
            .then((response) => {
                console.warn(response)
                console.log(response)
                // debugger
                this.setState({
                    payload: response.data.data
                }, () => {
                    console.log(this.state.payload)
                })

            })
            .catch(function (err) {
                console.log(err)
            })
    }
    search = (val)=>{
        this.setState({seachKey: val})
    }
    handleSearch = ()=>{

    }



    render() {
        return (
            <View>
                <ReactFlat_input 
                    search = {this.search}
                    seachKey={this.state.seachKey}
                    handleSearch={this.handleSearch}
                />
                <ScrollView>
                    <FlatList
                        data={this.state.payload}
                        renderItem={
                            ({ item }) => <ReactFlat_Card
                                id={item.id}
                                email={item.email}
                                avatar={item.avatar}
                            />
                        }
                    />
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 50,
        color: "red"
    }

})

