import React, { Component } from 'react';
import { View, Text,StyleSheet,ScrollView } from 'react-native'
import Demo_functional from '../src/Demo_functional'
import Demo_Input from '../src/Demo_Input'

export default class componentName extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          path:require('../Images/ani1.jpg'),
         text:'Presentational components should be used only for presenting view to the users. These components do not have state. They receive all data and functions as propsThe best practice is to use as much presentational components as possible.',
      };
    };
    
    render() {
        return (
            <View>
                <View style={{
                    paddingBottom: 20,
                    alignItems: "center", 
                    paddingTop: 50,
                    backgroundColor: "pink",
                }}>
                    <Demo_Input/>
                    {/* <Text>Hello</Text> */}

                </View>
                <ScrollView>
                <View style={{ backgroundColor: "grey",
                marginTop:1,padding: 10, }}>
                    <Demo_functional  text={this.state.text}
                    img={this.state.path}/>
                    <Demo_functional  text={this.state.text}
                    img={this.state.path}/>
                    <Demo_functional  text={this.state.text}
                    img={this.state.path}/>
                    <Demo_functional  text={this.state.text}
                    img={this.state.path}/>
                    <Demo_functional  text={this.state.text}
                    img={this.state.path}/>
                    <Demo_functional  text={this.state.text}
                    img={this.state.path}/>
                    <Demo_functional  text={this.state.text}
                    img={this.state.path}/>
                    
                </View>
                </ScrollView>
            </View>
        );
    }
}
