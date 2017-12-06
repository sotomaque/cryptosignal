import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { images } from '../../Utils/CoinIcons';
import Store from './../../Store';

const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
    },
})

const { image } = styles;

const CoinHeader = ({symbol}) => (
    <Image
        style={image}
        source={{ uri: images[Store.getState().singleCoin.data.map(coin => coin.symbol)] }}
    />
)

export default CoinHeader;
