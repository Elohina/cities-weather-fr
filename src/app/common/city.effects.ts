import { Injectable } from '@angular/core';
import { CitiesActions } from './city.actions';
import { CitiesService } from './city.service';
import { Actions, Effect } from '@ngrx/effects';
import * as cities from './city.actions';
import {UpdateWheatherSuccessAction} from './city.actions';
import {UpdateWheatherFailedAction} from './city.actions';
import * as fromRoot from './index';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CityEffects {

    @Effect() loadCities$ = this.actions
    .ofType(cities.CitiesActionTypes.UPDATE_CITIES_WHEATHER)
    .switchMap(
        () => this.citiesService.getWeatherCities()
        .map((data) => {
            return new UpdateWheatherSuccessAction(data.json());
        })
    )
    .catch(
        () => of( new UpdateWheatherFailedAction())
    );

    constructor(private actions: Actions,
                private citiesService: CitiesService
    ) {}
}
