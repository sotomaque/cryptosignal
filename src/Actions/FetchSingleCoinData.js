import axios from 'axios';
import {
    FETCH_SINGLE_COIN_DATA,
    FETCH_SINGLE_COIN_DATA_SUCCESS,
    FETCH_SINGLE_COIN_DATA_FAILURE,
} from './ActionTypes'
import { apiBaseURL } from './../Utils/Constants';


export default function FetchSingleCoinData(coinID) {
    return dispatch => {
        dispatch({type: FETCH_SINGLE_COIN_DATA})

        return axios.get(`${apiBaseURL}/v1/ticker/${coinID}`)
            .then(res => {
                return dispatch({
                    type: FETCH_SINGLE_COIN_DATA_SUCCESS, payload,
                    payload: res.data
                })
            })
            .catch(err => {
                return dispatch({
                    type: FETCH_SINGLE_COIN_DATA_FAILURE,
                    payload: err
                })
            })
    }
}
