import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={headerContainer}>
            <Image source={require('./../Assets/cryptosignal_logo.png')} style={headerImage} />
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        alignItems: "center",
        margin: 0,
        padding: 0,
    },
    headerImage: {
        width: 150,
        height: 50,
        resizeMode: 'contain'
    }
})

const { headerContainer, headerImage } = styles;


export default Header;
