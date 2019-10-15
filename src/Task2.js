import React from 'react';
import { SafeAreaView, View,Image, FlatList, StyleSheet, Text } from 'react-native';


const DATA = [
  {
    img: 'https://images.pexels.com/photos/2891541/pexels-photo-2891541.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    title: 'First Item',
    desc: "go to hell ",
    time:'4:10'
  },
  {
    img: 'https://images.pexels.com/photos/2891541/pexels-photo-2891541.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    title: 'Second Item',
    desc: "Got to hell",
    time:'4:10'
  },
];

function Item({ img,title ,desc,time }) {
  return (
    <View style={{
        flex: .25,
        justifyContent: "center",
        alignItems: "center",

        flexDirection: "row"
      }}>
        <View style={{ flex: 2, }} >
          <Image style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{ uri: img }} />
        </View>

        <View style={{ flex: 5, flexDirection: "column" }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{title} </Text>
          <Text style={{ fontSize: 15 }}>{desc} </Text>
        </View>
        <View style={{ flexDirection: "row", flex: 1, paddingRight: 10 }}>
          <Text style={{ fontSize: 15 }}>{time}</Text>
        </View>


      </View>
  );
}

export default function App() {
  return (
    <SafeAreaView >
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item  img={item.img} desc={item.desc} title={item.title} time={item.time}  />}
      />
    </SafeAreaView>
  );
}

