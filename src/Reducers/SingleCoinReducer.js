import {
    FETCH_SINGLE_COIN_DATA,
    FETCH_SINGLE_COIN_DATA_SUCCESS,
    FETCH_SINGLE_COIN_DATA_FAILURE,
} from './../Actions/ActionTypes';

const initialState = {
    isFetching: false,
    data: [],
    hasError: false,
    errorMessage: null,
};

export default function(state = initialState, action) {
    switch (action.type) {

        case FETCH_SINGLE_COIN_DATA:
            return {
                ...state,
                isFetching: true
            };

        case FETCH_SINGLE_COIN_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
            };

        case FETCH_SINGLE_COIN_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                hasError: true,
                errorMessage: action.payload
            }

        default:
            return state;

    }
}
