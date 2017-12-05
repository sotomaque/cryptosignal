import React from 'react';
import {
    StackNavigator,
    addNavigationHelpers
} from 'react-navigation';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { CryptoContainer } from '../components/MainView';
import ExpandedView from '../components/ExpandedView';
import Header from './../components/Header';

export const AppNavigator = StackNavigator({
    Index: {
        screen: CryptoContainer,
    },
    ExpandedView: {
        screen: ExpandedView,
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
