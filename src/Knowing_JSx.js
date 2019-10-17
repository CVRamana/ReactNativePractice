import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

//functional component  or reusble component
const Mydata = () => {
    return (
        <Text> this is the functional component</Text>
    )
}

const Mydata3 = (props) =>{
    return (
        <View>
        <Text>Class based component</Text>
        {/* // comimg to the props use in class based components */}
        <Text>{props.name}</Text>
        <Text>{props.status}</Text>
    </View>
    )
}

//class based component
class MyData1 extends React.Component {
    render() {
        return (
            // jab bhi return karvao root level pr ek hi component hona chahiye wrap it in a view
            <View>
                <Text>Class based component</Text>
                {/* // comimg to the props use in class based components */}
                <Text>{this.props.name}</Text>
                <Text>{this.props.status}</Text>
            </View>
        );
    }
}

export default class Knowing_JSX extends Component {
    render() {
        // class based component
        const disp = ['eat', 'sleep', 'code']
        const daat = disp.map(data => {
            return <Text> {data} </Text>
        })
        return (
            <View style={styles.container}>
                {daat}
                <Mydata />
                <MyData1/>
                <MyData1 name="raman" status="Developer" />
                <Mydata3 name="raman" status="Developer" />
                <Mydata3 name="raman" status="Developer" />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "skyblue",
        justifyContent: "center",
        alignItems: "center"
    },
})

