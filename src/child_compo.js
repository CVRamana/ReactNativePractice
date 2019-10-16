import React, {Component} from 'react'
import {
View,
Text,
PropTypes,
} from 'react-native'
export default class Heading extends Component {
    render () {
      return (
        <View >
          <Text>{this.props.message}</Text>
        </View>
      )
    }
  }
//   Heading.propTypes = {
//     message: PropTypes.string
//   }
  Heading.defaultProps = {
    message: 'Heading One'
  }