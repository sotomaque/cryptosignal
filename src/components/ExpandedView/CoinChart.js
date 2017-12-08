import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { G, Path, Rect, Line } from 'react-native-svg'
import Axis from './Axis';
import { VictoryChart, VictoryAxis, VictoryArea, VictoryPolarAxis, VictoryBar, VictoryTheme } from 'victory-native'

class CoinChart extends Component {

    render() {

        const { data } = this.props;
        const { chartContainer } = styles;
        console.log(data)
        return (
            <View style={chartContainer}>
                <VictoryChart>
                    <VictoryAxis
                        animate={{
                            duration: 2000,
                            easing: "bounce"
                        }}
                        style={{
                            axis: {stroke: "#25A67E"},
                            grid: {strokeWidth: 2},
                            ticks: {stroke: "white"},
                            tickLabels: {fill: '#25A67E', "font-weight": "bold"},
                        }}
                        tickValues={["1D", "1M", "3M", "1Y"]}
                        domain={"date"}
                    />
                    <VictoryAxis
                    animate={{
                            duration: 2000,
                            easing: "bounce"
                        }}
                        style={{
                            axis: {stroke: "#25A67E"},
                            grid: {strokeWidth: 2},
                            ticks: {stroke: "white"},
                            tickLabels: {fill: '#25A67E', "font-weight": "bold"},
                        }}
                        domain={[0, 10000]}
                        
                    />

                </VictoryChart>

            </View>
  
        );


    }
}

const styles = StyleSheet.create({
    chartContainer: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: '#000',
        height: 460,
        paddingLeft: 10,
        paddingRight: 10,
    }
})

export default CoinChart;
