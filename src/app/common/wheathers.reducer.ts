import * as wheatherActions from './wheathers.actions';
import { AppConfig } from '../app.config';


export type Action = wheatherActions.CitiesActions;

export interface Cities {
    date: number;
    cities: any[];
}

export interface State {
    wheathers: Cities[];
}

export const initialState: State = {
    wheathers: []
};

export function reducer(state = initialState, action: Action & {payload?: any}): State {
    switch (action.type) {
        case wheatherActions.WheathersActionTypes.UPDATE_CITIES_WHEATHER: {
            return { ...state};
        }
        case wheatherActions.WheathersActionTypes.UPDATE_SUCCESS: {
            const citiesUp = {date: Date.now(), cities: action.payload.list};
            const wheathers = state.wheathers.slice();
            wheathers.unshift(citiesUp);
            return { ...state, wheathers};
        }
        case wheatherActions.WheathersActionTypes.UPDATE_FAILURE: {
            return { ...state};
        }
        default: return { ...state};
    }
}

export const getWheathers = (state: State) => state.wheathers;
