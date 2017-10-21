import { createSelector } from 'reselect';
import * as wheatherReducer from './wheathers.reducer';
import {compose} from '@ngrx/store';
import {combineReducers} from '@ngrx/store';

export interface AppState {
    wheathers: wheatherReducer.State;
}

export const reducers = {
    wheatherReducer: wheatherReducer.reducer
};

const developmentReducer: Function = compose(combineReducers)(reducers);

export function metaReducer(state: any, action: any) {
    return developmentReducer(state, action);
}

export const getWheathersState = (state: AppState) => state.wheathers;
export const getWheathers = createSelector(getWheathersState, wheatherReducer.getWheathers);
