import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import FetchSingleCoinData from './../../Actions/FetchSingleCoinData';
import Spinner from 'react-native-loading-spinner-overlay';

class SingleCoinContainer extends Component {

    componentDidMount() {
        const { FetchSingleCoinData, navigation, singleCoin } = this.props
        FetchSingleCoinData(navigation.state.params.id)
    }

    renderCoin = () => {
        const { singleCoin} = this.props;
        return singleCoin.data.map((item, i) => <Text key={i}>{item.name} </Text>)

    }

    render() {

        const { singleCoin } = this.props;
        const { contentContainer } = styles;

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
                {this.renderCoin()}
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
