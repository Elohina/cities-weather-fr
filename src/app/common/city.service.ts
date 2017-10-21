import {Injectable, Inject} from '@angular/core';
import {Response, Http, Headers, RequestOptions } from '@angular/http';
import {Store} from '@ngrx/store';
import * as fromRoot from './index';
import { AppConfig } from '../app.config';

@Injectable()
export class CitiesService {
    constructor(private http: Http, private store: Store<fromRoot.AppState>) {}

    getWeatherCities() {
        const ids: any[] = AppConfig.CITIES;
        return this.http.get(
            AppConfig.API_URL + '&id=' + ids + '&appid=' + AppConfig.API_KEY
        );
    }
}
