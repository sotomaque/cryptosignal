import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateChartPrices } from '../redux/chart';
import Line from '../components/chart/line';
import numeral from 'numeral';
import styled from 'styled-components/native';


@connect((state) => {
    const {
      coins: { current: symbol, list },
      chart: { range, prices, loading },
    } = state;
    return { symbol, range, prices, list, loading };
  },
  (dispatch) => bindActionCreators({ updateChartPrices }, dispatch)
)

export default class Chart extends Component {

  state = {
    viewHeight: 0,
    prices: [],
  };

  componentWillMount() {
    this.props.updateChartPrices();
  }

  componentWillReceiveProps(nextProps) {
    // Update chart data if current symbol or range were changed
    if (nextProps.symbol !== this.props.symbol
      || nextProps.range !== this.props.range) {
      this.props.updateChartPrices();
    }
    this.setState({ prices: nextProps.prices });
  }

  render() {

    const {
      loading,
      prices,
      range,
      list,
      current,
      price,
      symbol
    } = this.props;
    console.log(symbol, list)

    const mapSymbolToPrice = list.filter(coin => coin.symbol === symbol); // selected coin price


    return (
      <View style={styles.container}>
        <OdometerPriceView>
          <OdometerPrice>
            {mapSymbolToPrice[0].price
              ? numeral(mapSymbolToPrice[0].price).format('$0,0[.]0[0000]')
              : '—'
            }
          </OdometerPrice>
        </OdometerPriceView>

        {loading && <View pointerEvents="box-none" style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>}
        {prices.length > 0 && <Line
          values={this.state.prices}
        />}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 38, // take 38% of the screen height
    backgroundColor: '#303032',
  },
  loading: {
    ...StyleSheet.absoluteFillObject, // overlay the chart
    alignItems: 'center',             // center horizontally
    justifyContent: 'center',         // center vertically
    zIndex: 1,                        // show in front of the chart
  },
});

const OdometerPriceView = styled.View`
  display: flex;
  justify-content: center;
`

const OdometerPrice = styled.Text`
  color: #fff;
  font-size: 28;
  paddingTop: 20;
  align-self: center;
  text-shadow-offset: 10px 5px;
`
