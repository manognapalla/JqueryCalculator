import * as actionTypes from '../actions/actionTypes';

const weather = (state = [], action) => {
    switch (action.type) {
        case actionTypes.GET_WEATHER:
            return {
                payload: action.payload
            }
        case actionTypes.UPDATE_WEATHER:
            return {
                payload: action.payload
            }
        default:
            return state
    }
}

export default weather;