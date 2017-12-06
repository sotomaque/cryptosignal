import React, { Component } from 'react';
import { View } from 'react-native';
import {
    VictoryAxis,
    VictoryBar,
    VictoryChart
} from "victory-native";

const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
];

class CoinChart extends Component {
    render() {
        return (
            <View>
                {/* <VictoryChart domainPadding={40}>
                    <VictoryAxis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                    />
                    <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`$${x / 1000}k`)}
                    />
                    <VictoryBar
                    style={{
                        data: {fill: "blue"}
                    }}
                    data={data}
                    x="quarter"
                    y="earnings"
                    />
                </VictoryChart> */}
            </View>
        )
    }
}

export default CoinChart;
