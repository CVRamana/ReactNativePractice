import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, props, ActivityIndicator } from 'react-native'
import axios from 'axios';

export default class React_NativeAPI extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            isLoading: true,
            dataSource: [],
        })
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((response) => {
                console.log(response)
                this.setState({
                    isLoading:false,
                    dataSource: response.data

                })
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    render() {
        if (this.state.isLoading) {
            return (
                
                <View style={{
                    flex: .05, alignItems: 'center',
                    paddingTop:30,
                    justifyContent: 'center', 
                }}>
                    <ActivityIndicator size={"large"} color="green" animating={true}
                        hidesWhenStopped={true} />
                </View>
                )

        }
        console.log("Render", this.state.dataSource)
        return (
            <View style={styles.parent_container}>

                <FlatList
                    data={this.state.dataSource}
                    renderItem={(rowdata) => {
                        return (
                            <View style={styles.card}>
                                <View style={{ flexDirection: "row", flex: 1 }}>
                                    <Text style={styles.text1}>ID: </Text>
                                    <Text style={styles.text21}>{rowdata.item.id}</Text>
                                </View>
                                <View style={{ flexDirection: "row", flex: 1 }}>
                                    <Text style={styles.text1}>USERID: </Text>
                                    <Text style={styles.text22}>{rowdata.item.userId}</Text>
                                </View>
                                <View style={{ flexDirection: "row", flex: 1 }}>
                                    <Text style={styles.text1}>TITLE:  </Text>
                                    <Text style={styles.text24} >{rowdata.item.title}</Text>
                                </View>
                                <View style={{ flexDirection: "row", flex: 1 }}>
                                    <Text style={styles.text1}>COMPLETED:  </Text>
                                    <Text style={styles.text23}>{`${rowdata.item.completed}`}</Text>
                                </View>
                            </View >




                        )
                    }}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parent_container: {
        flex: 1,
        paddingTop: 60,
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor: "pink"
    },
    text1: {
        color: "orange",
        // marginRight:50
    },
    text21: {
        paddingLeft: 72,
        // color:"orange",

    },
    text22: {
        paddingLeft: 37,
        // color:"orange",

    },
    text23: {
        //paddingLeft:40,
        //color:"orange",

    },
    text24: {
        width: 250,
        paddingLeft: 46
    },
    card: {
        borderRadius: 20,
        flex: 1,
        padding: 20,
        margin: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        backgroundColor: '#f0f0f0',
        flexDirection: "column"

    }
})
