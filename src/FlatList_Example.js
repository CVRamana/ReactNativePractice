import React, { Component } from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
export default class Flat_ex extends React.Component {
    state = {
        persons: [
            {
                name: "Raman"
            },  
            {   name: "Aaman"
            },
            {
                name: "Kaman"
            },
            {
                name: "Oaman"
            },
            {
                name: "Yaman"
            },
        ]
    }

    render() {
        // before the flatlist
        //     const mylist=this.state.persons.map(item=>{
        //         return <Text style={Styles.text}>{item.name}</Text>
        //     })
        return (
            <View style={Styles.container}>
                <FlatList
                    keyExtractor={item => {item.name }}
                    data={this.state.persons}
                    renderItem={(item) => {
                        console.log(item)// will the whole info
                        console.log({ item })
                        return <Text style={Styles.text}> Heloo {item.name} </Text>
                    }}
                />
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink"
    },
    text: {
        fontSize: 28,
        fontWeight: "bold"
    }
})
