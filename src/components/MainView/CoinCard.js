import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { images } from '../../Utils/CoinIcons';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 20,
        borderBottomColor: "rgba(255, 255, 255, 0.1)",
        borderBottomWidth: 2,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    'container:first-child': {
        marginTop: 1000
    },
    coinDetailContainer: {
        marginLeft: 20,
        marginTop: 4,
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 5,
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
        marginTop: 15,
        marginLeft: 10,
    },
    moneySymbol: {
        fontWeight: "bold",
    },
    percentChangeContainer: {
        display: "flex",
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
        overflow: 'hidden',
    },
    percentChangeMinus: {
        backgroundColor: "#F45531",
        color: "#fff",
        fontWeight: "bold",
        padding: 14,
        fontSize: 14,
        borderRadius: 4,
        overflow: 'hidden',

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


const CoinCard = ({
    symbol, coin_name, price_usd,
    percent_change_24h, percent_change_7d,
    NavigateToExpandedView }) => {

    return (

            <View style={container}>

                <TouchableHighlight onPress={NavigateToExpandedView}>
                    <Image
                        style={image}
                        source={{ uri: images[symbol] }}
                    />
                </TouchableHighlight>

                <TouchableHighlight onPress={NavigateToExpandedView}>
                    <View style={coinDetailContainer}>
                        <Text style={coinName}>{coin_name}</Text>
                        <Text style={coinSymbol}>{symbol}</Text>
                    </View>
                </TouchableHighlight>

                    <View style={percentChangeContainer}>
                        <TouchableHighlight onPress={NavigateToExpandedView}>
                            <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus }>
                                {percent_change_24h} %
                            </Text>
                        </TouchableHighlight>
                    </View>

            </View>
    );
}

const mapDispatchToProps = (dispatch, props) => {
    console.log(props)
    return {
        NavigateToExpandedView: () =>
            dispatch(NavigationActions.navigate(
                { routeName: 'ExpandedView', params: props.symbol}
            ))
    }
}

export default connect(null, mapDispatchToProps)(CoinCard);
