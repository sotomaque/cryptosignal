import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { images } from '../Utils/CoinIcons';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 20,
        borderBottomColor: "rgba(255, 255, 255, 0.1)",
        borderBottomWidth: 2,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    coinDetailContainer: {
        marginLeft: 20,
        display: "flex",
        justifyContent: "flex-start"
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",
        color: "#fff",
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20,
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16
    },
    coinPrice: {
        marginTop: 10,
        marginRight: 10,
        fontWeight: "bold",
    },
    image: {
        width: 35,
        height: 35,
    },
    moneySymbol: {
        fontWeight: "bold",
    },
    percentChangeContainer: {
        paddingTop: 14,
        paddingBottom: 7,
        paddingRight: 14,
        marginLeft: "auto",
    },
    percentChangePlus: {
        backgroundColor: "#58B522",
        fontWeight: "bold",
        color: "#fff",
        padding: 14,
        fontSize: 14,
        borderRadius: 4,
        overflow: 'hidden'
    },
    percentChangeMinus: {
        backgroundColor: "#F45531",
        color: "#fff",
        fontWeight: "bold",
        padding: 14,
        fontSize: 14,
        borderRadius: 4,
        overflow: 'hidden'
    }
});

const {
    container,
    image,
    moneySymbol,
    coinSymbol,
    coinName,
    percentChangePlus,
    percentChangeMinus,
    percentChangeContainer,
    coinDetailContainer
} = styles;

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }) => {

    return (
        <View style={container}>

            <Image
                style={image}
                source={{ uri: images[symbol] }}
            />

            <View style={coinDetailContainer}> 
                <Text style={coinName}>{coin_name}</Text>
                <Text style={coinSymbol}>{symbol}</Text>
            </View>

            <View style={percentChangeContainer}>
                <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus }>
                    {percent_change_24h} %
                </Text>
            </View>

        </View>
    );
}



export default CoinCard;
