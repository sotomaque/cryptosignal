import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer';
import CryptoReducer from './CryptoReducer';
import Chart from './../components/ExpandedView/redux/chart';
import Coins from './../components/ExpandedView/redux/coins';

export default combineReducers({
    navigation: NavigationReducer,
    crypto: CryptoReducer,
    chart: Chart,
    coins: Coins,
});
