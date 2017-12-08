import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        height: 120,
        backgroundColor: "#21CE99",
        justifyContent: "space-around",
    },
    text: {
        marginTop: 25,
        color: '#fff',
        fontWeight: "bold"
    }

})
const { wrapper, text } = styles;

const cryptoSymbols = ['BTC', 'ETH', 'BCH', 'XRP', 'LTC'];

const mapSymbols = () => {
    return cryptoSymbols.map(symbol => <Text style={text}>{symbol}</Text>)
}

const CoinNavigation = () => (
    <View style={wrapper}>
        {mapSymbols()}

    </View>
)



export default CoinNavigation;
