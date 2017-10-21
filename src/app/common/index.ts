import { createSelector } from 'reselect';
import * as fromCities from './city.reducer';
import {compose} from '@ngrx/store';
import {combineReducers} from '@ngrx/store';

export interface AppState {
    cities: fromCities.State;
}

export const reducers = {
    citiesReducer: fromCities.reducer
};

const developmentReducer: Function = compose(combineReducers)(reducers);

export function metaReducer(state: any, action: any) {
    return developmentReducer(state, action);
}

export const getCitiesState = (state: AppState) => state.cities;

export const getCities = createSelector(getCitiesState, fromCities.getCities);
