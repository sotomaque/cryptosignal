import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import FetchSingleCoinData from './../../Actions/FetchSingleCoinData';
import Spinner from 'react-native-loading-spinner-overlay';

class SingleCoinContainer extends Component {

    componentDidMount() {
        const { FetchSingleCoinData, navigation, singleCoin } = this.props
        FetchSingleCoinData(navigation.state.params.id)
        console.log(navigation.state.params.id)
    }

    render() {

        const { singleCoin } = this.props;
        const { contentContainer } = styles;

        console.log(singleCoin)

        if (singleCoin.isFetching) {
            return (
                <View contentContainerStyle={contentContainer}>
                    <Spinner
                        visible={singleCoin.isFetching}
                        textContent={"Loading..."}
                        textStyle={{color: '#253145'}}
                        animation="fade"
                    />
                </View>
            )
        }

        return (
            <View>
                <Text>coin</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: "#05060A",
    }
})

const mapStateToProps = ({singleCoin}) => {
    return { singleCoin };
}

export default connect(mapStateToProps, { FetchSingleCoinData })(SingleCoinContainer);
