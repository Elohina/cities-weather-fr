import {Action} from '@ngrx/store';

export const WeatherActionTypes = {
    UPDATE_CITIES_WEATHER: '[Weather] Update cities wheather',
    UPDATE_SUCCESS: '[Weather] Successfully updated wheather cities',
    UPDATE_FAILURE: '[Weather] Failed to load wheater cities',
};

export class UpdateWeatherAction implements Action {
    readonly type = WeatherActionTypes.UPDATE_CITIES_WEATHER;
    constructor() {}
}

export class UpdateWeatherSuccessAction implements Action {
    readonly type = WeatherActionTypes.UPDATE_SUCCESS;
    constructor(public payload: any[]) {}
}

export class UpdateWeatherFailedAction implements Action {
    readonly type = WeatherActionTypes.UPDATE_FAILURE;
    constructor() {}
}

export type WeatherActions = UpdateWeatherAction | UpdateWeatherSuccessAction | UpdateWeatherFailedAction;
