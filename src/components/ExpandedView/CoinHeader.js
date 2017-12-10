import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { images } from '../../Utils/CoinIcons';
import Store from './../../Store';

const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
        borderWidth: 0,
        resizeMode: 'contain'
    },
})

const { image } = styles;

const CoinHeader = ({symbol}) => (
    <Image
        style={image}
        source={require('./../../Assets/cryptosignal_logo.png')}
    />
)

export default CoinHeader;
