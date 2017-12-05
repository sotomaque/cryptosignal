import React from 'react';
import {
    StackNavigator,
    addNavigationHelpers
} from 'react-navigation';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { CryptoContainer } from '../components/MainView';
import { SingleCoinContainer } from '../components/ExpandedView';
import Header from './../components/Header';

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

export const AppNavigator = StackNavigator({
    Index: {
        screen: CryptoContainer,
        ...header
    },
    ExpandedView: {
        screen: SingleCoinContainer,
        ...header
    }
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
