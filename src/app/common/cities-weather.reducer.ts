import * as weatherActions from './cities-weather.actions';
import { AppConfig } from '../app.config';


export type Action = weatherActions.WeatherActions;

export interface Cities {
    date: number;
    cities: any[];
}

export interface State {
    weather: Cities[];
}

export const initialState: State = {
    weather: []
};

export function CitiesWeatherReducer(state = initialState, action: Action & {payload?: any}): State {
    switch (action.type) {
        case weatherActions.WeatherActionTypes.UPDATE_CITIES_WEATHER: {
            return { ...state};
        }
        case weatherActions.WeatherActionTypes.UPDATE_SUCCESS: {
            const citiesUp = {date: Date.now(), cities: action.payload.list};
            const weather = state.weather.slice();
            weather.unshift(citiesUp);
            return { ...state, weather};
        }
        case weatherActions.WeatherActionTypes.UPDATE_FAILURE: {
            return { ...state};
        }
        default: return { ...state};
    }
}

export const getWeather = (state: State) => state.weather;
