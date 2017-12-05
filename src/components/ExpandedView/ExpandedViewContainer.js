import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import FetchSingleCoinData from './../../Actions/FetchSingleCoinData';

class ExpandedViewContainer extends Component {

    componentDidMount() {
        const { FetchSingleCoinData, navigation, singleCoin } = this.props
        FetchSingleCoinData(navigation.state.params.coins)

        console.log(singleCoin);
    }

    render() {
        return (
            <View>
                <Text>coin</Text>
            </View>
        )
    }
}

const mapStateToProps = ({singleCoin}) => {
    return { singleCoin };
}

export default connect(mapStateToProps, { FetchSingleCoinData })(ExpandedViewContainer);
