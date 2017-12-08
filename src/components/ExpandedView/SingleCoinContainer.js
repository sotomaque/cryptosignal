import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import FetchSingleCoinData from './../../Actions/FetchSingleCoinData';
import Spinner from 'react-native-loading-spinner-overlay';
import CoinChart from './CoinChart';
import CoinNavigation from './CoinNavigation';

class SingleCoinContainer extends Component {

    componentDidMount() {
        const { FetchSingleCoinData, navigation, singleCoin } = this.props
        FetchSingleCoinData(navigation.state.params.id)
    }

    renderCoin = () => {
        const { singleCoin } = this.props;
        return singleCoin.data.map((item, i) => <Text key={i}>{item.name} </Text>)
    }

    renderChart = () => {
        const { singleCoin } = this.props;
        const data = [
            "bpi": {
                "2017-11-06": 6958.2113,
                "2017-11-07": 7118.8013,
                "2017-11-08": 7458.795,
                "2017-11-09": 7146.7813,
                "2017-11-10": 6570.3125,
                "2017-11-11": 6337,
                "2017-11-12": 5857.3175,
                "2017-11-13": 6517.6763,
                "2017-11-14": 6598.7688,
                "2017-11-15": 7279.0013,
                "2017-11-16": 7843.9375,
                "2017-11-17": 7689.9088,
                "2017-11-18": 7776.94,
                "2017-11-19": 8033.9363,
                "2017-11-20": 8238.2025,
                "2017-11-21": 8095.5938,
                "2017-11-22": 8230.6925,
                "2017-11-23": 8002.6413,
                "2017-11-24": 8201.4613,
                "2017-11-25": 8763.785,
                "2017-11-26": 9326.5888,
                "2017-11-27": 9739.055,
                "2017-11-28": 9908.2288,
                "2017-11-29": 9816.3475,
                "2017-11-30": 9916.5363,
                "2017-12-01": 10859.5625,
                "2017-12-02": 10895.0138,
                "2017-12-03": 11180.8875,
                "2017-12-04": 11616.855,
                "2017-12-05": 11696.0583,
                "2017-12-06": 13708.9913
            },
        ];

        return (
            <CoinChart
                data={data}
            />
        )
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
                <CoinNavigation />
                {this.renderChart()}
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
