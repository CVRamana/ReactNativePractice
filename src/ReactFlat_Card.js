import React, { Component } from 'react';
import { View, Text, props, Image ,StyleSheet} from 'react-native';

const ReactFlat_Card = (props) => {
    console.warn(props.avatar)
    console.warn(props.email)
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={{ uri: props.avatar }}
            />
             {/* <Text>{props.id} 
            </Text> */}
            <Text style={styles.txt}>{props.email}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor:"pink",
        margin:10,
        borderRadius:10,
        alignItems:"center"


    },
    img: {
        width: 100,
        height: 100,
        borderRadius:10
    },
    txt:{
        fontSize:20,
        paddingLeft:10

    }
})
export default ReactFlat_Card