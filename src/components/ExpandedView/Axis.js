import React, { Component } from 'react'
import { G, Line } from 'react-native-svg'

export default class Axis extends Component {
    render() {
        return (
            <G fill="none">
            <Line x1="20" y1="100" x2="100" y2="20"
            stroke-width="2" stroke="black"/>
      
            </G>
        )
    }
}
