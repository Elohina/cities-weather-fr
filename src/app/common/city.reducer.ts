import * as cities from './city.actions';
import { AppConfig } from '../app.config';


export type Action = cities.CitiesActions;

export interface State {
    cities: any[];
}

export const initialState: State = {
    cities: AppConfig.CITIES
};

export function reducer(state = initialState, action: Action & {payload?: any}): State {
    switch (action.type) {
        case cities.CitiesActionTypes.UPDATE_CITIES_WHEATHER: {
            return { ...state};
        }
        case cities.CitiesActionTypes.UPDATE_SUCCESS: {
            const cities = action.payload['list'];
            return { ...state, cities};
        }
        case cities.CitiesActionTypes.UPDATE_FAILURE: {
            return Object.assign({}, state, {
                cities: []
            });
        }
        default: return { ...state};
    }
}

export const getCities = (state: State) => state.cities;
