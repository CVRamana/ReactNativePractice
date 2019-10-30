import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'

const Demo_functional = (props) => {
   return (
      <View style={{ borderRadius:10, margin: 5,
      backgroundColor:"white",
     // padding: 10,
      flex:1,
      flexDirection:"row"}}>
          <View style={{flex:.4,padding:10}}>
           <Image
          style={{width: 100, height: 100}}
          source={props.img}/>
          </View>
          <View style={{paddingTop: 10,flex:.6}}>
         <Text >
            {props.text}
         </Text>
         </View>
      </View>
   )
}
export default Demo_functional