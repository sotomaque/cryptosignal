import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer';
import CryptoReducer from './CryptoReducer';

export default combineReducers({
    navigation: NavigationReducer,
    crypto: CryptoReducer
});
