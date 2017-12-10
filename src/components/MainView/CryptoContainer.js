import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from './../../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {

    componentDidMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const { crypto } = this.props;
        return crypto.data.map((coin, index) =>
            <CoinCard
                key={coin.name}
                id={coin.id}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.price_usd}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
            />
        )
    }


    render() {
        const { crypto } = this.props;
        const { contentContainer } = styles;

        // if (crypto.isFetching) {
        //     return (
        //         <View contentContainerStyle={contentContainer}>
        //             <Spinner
        //                 visible={crypto.isFetching}
        //                 textContent={"Loading..."}
        //                 textStyle={{color: '#253145'}}
        //                 animation="fade"
        //             />
        //         </View>
        //     )
        // }

        return (
            <ScrollView contentContainerStyle={contentContainer}>
                {this.renderCoinCards()}
            </ScrollView>
        )

    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: "#303032",
    }
})

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)
