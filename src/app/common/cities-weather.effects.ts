import { Injectable } from '@angular/core';
import { CitiesWeatherService } from './cities-weather.service';
import { Actions, Effect } from '@ngrx/effects';
import * as cities from './cities-weather.actions';
import {UpdateWeatherSuccessAction} from './cities-weather.actions';
import {UpdateWeatherFailedAction} from './cities-weather.actions';
import * as fromRoot from './index';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CitiesWeatherEffects {

    @Effect() loadCities$ = this.actions
    .ofType(cities.WeatherActionTypes.UPDATE_CITIES_WEATHER)
    .switchMap(
        () => this.weatherService.getWeatherCities()
        .map((data) => {
            return new UpdateWeatherSuccessAction(data.json());
        })
    )
    .catch(
        () => of( new UpdateWeatherFailedAction())
    );

    constructor(private actions: Actions,
                private weatherService: CitiesWeatherService
    ) {}
}
