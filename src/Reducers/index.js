import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer';
import CryptoReducer from './CryptoReducer';
import SingleCoinReducer from './SingleCoinReducer';

export default combineReducers({
    navigation: NavigationReducer,
    crypto: CryptoReducer,
    singleCoin: SingleCoinReducer
});
