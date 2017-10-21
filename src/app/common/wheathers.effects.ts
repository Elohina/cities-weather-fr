import { Injectable } from '@angular/core';
import { WheathersService } from './wheathers.service';
import { Actions, Effect } from '@ngrx/effects';
import * as cities from './wheathers.actions';
import {UpdateWheatherSuccessAction} from './wheathers.actions';
import {UpdateWheatherFailedAction} from './wheathers.actions';
import * as fromRoot from './index';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';

@Injectable()
export class WheathersEffects {

    @Effect() loadCities$ = this.actions
    .ofType(cities.WheathersActionTypes.UPDATE_CITIES_WHEATHER)
    .switchMap(
        () => this.wheatherService.getWeatherCities()
        .map((data) => {
            return new UpdateWheatherSuccessAction(data.json());
        })
    )
    .catch(
        () => of( new UpdateWheatherFailedAction())
    );

    constructor(private actions: Actions,
                private wheatherService: WheathersService
    ) {}
}
