import React, { Component } from 'react';
import {View,Image,Text,props} from 'react-native'

 const Child_Img=()=>{
    return (
        <Image style={{flex:1}}
        source = {{uri:'https://images.pexels.com/photos/2239899/pexels-photo-2239899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
        resizeMode={"cover"}
        />
    )
}
export default Child_Img

