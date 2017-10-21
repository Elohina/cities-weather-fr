import * as cities from './city.actions';
import { AppConfig } from '../app.config';


export type Action = cities.CitiesActions;

export interface Cities {
    date: Date;
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
        case cities.CitiesActionTypes.UPDATE_CITIES_WHEATHER: {
            return { ...state};
        }
        case cities.CitiesActionTypes.UPDATE_SUCCESS: {
            const cities = {date: new Date(), cities: action.payload.list};
            const wheathers = state.wheathers.slice();
            wheathers.unshift(cities);
            return { ...state, wheathers};
        }
        //TODO
        // case cities.CitiesActionTypes.UPDATE_FAILURE: {
        //     return Object.assign({}, state, {
        //         cities: []
        //     });
        // }
        default: return { ...state};
    }
}

export const getWheathers = (state: State) => state.wheathers;
