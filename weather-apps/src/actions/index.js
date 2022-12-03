import { GET_WEATHER, UPDATE_WEATHER } from './actionTypes';

export const getWeather = (data) => {
    return {
        type: GET_WEATHER,
        payload: data
    }
};


export const updateWeather = (data) => {
    return {
        type: UPDATE_WEATHER,
        payload: data
    }
};