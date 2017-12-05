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
        backgroundColor: "#191c21",
        paddingTop: 5,
        paddingBottom: 20,
        marginTop: 200
    },
    headerImage: {
        marginTop: 45,
        width: 150,
        height: 50,
        resizeMode: 'contain'
    }
})

const { headerContainer, headerImage } = styles;


export default Header;
