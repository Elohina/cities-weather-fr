import { createSelector } from 'reselect';
import * as weatherReducer from './cities-weather.reducer';
import {compose} from '@ngrx/store';
import {combineReducers} from '@ngrx/store';

export interface AppState {
    weather: weatherReducer.State;
}

export const reducers = {
    weatherReducer: weatherReducer.CitiesWeatherReducer
};

const developmentReducer: Function = compose(combineReducers)(reducers);

export function metaReducer(state: any, action: any) {
    return developmentReducer(state, action);
}

export const getWheathersState = (state: AppState) => state.weather;
export const getWheathers = createSelector(getWheathersState, weatherReducer.getWeather);
