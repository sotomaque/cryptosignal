import React from 'react';
import {
    StackNavigator,
    addNavigationHelpers
} from 'react-navigation';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { CryptoContainer } from '../components/MainView';
import CoinHeader from '../components/ExpandedView/CoinHeader';
import Header from './../components/Header';
import List from '../components/ExpandedView/screens/List.js';
import Add from '../components/ExpandedView/screens/Add.js';

const header = {
    navigationOptions: {
        headerTitle: Header,
        headerStyle: {
            backgroundColor: '#191c21',
            height: 85,
            paddingBottom: 5
        },
        headerTitleStyle: {
            color: 'white',
        },
        headerBackTitleStyle: {
            color: 'white',
        },
        headerTintColor: 'white',
        headerPadding: 5
    }
}

const expandedHeader = {
    navigationOptions: {
        headerTitle: CoinHeader,
        headerStyle: {
            backgroundColor: '#000',
            height: 85,
            borderBottomWidth: 0,
        },
        headerTitleStyle: {
            color: 'white',
            shadowColor: 'transparent'
        },
        headerBackTitleStyle: {
            color: 'white',
        },
        headerTintColor: 'white',
        headerPadding: -5,

    }
}

export const AppNavigator = StackNavigator({
    Index: {
        screen: CryptoContainer,
        ...header
    },
    List: { screen: List, ...expandedHeader }, // list with the chart
    Add: { screen: Add, ...expandedHeader },   // add new coin screen
})


const AppWithNavigationState = ({dispatch, navigation}) => {
    return <AppNavigator navigation={addNavigationHelpers({ dispatch, state: navigation})} />
}

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
}

const mapStateToProps = ({navigation}) => {
    return { navigation }
}

export default connect(mapStateToProps)(AppWithNavigationState);
