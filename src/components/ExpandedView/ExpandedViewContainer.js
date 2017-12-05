import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ExpandedViewContainer extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <View>
                <Text>coin</Text>
            </View>
        )
    }
}

export default ExpandedViewContainer;
