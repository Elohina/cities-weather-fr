import {Injectable, Inject} from '@angular/core';
import {Response, Http, Headers, RequestOptions } from '@angular/http';
import {Store} from '@ngrx/store';
import * as fromRoot from './index';
import { AppConfig } from '../app.config';

@Injectable()
export class CitiesService {
    public cities: any;

    constructor(private http: Http, private store: Store<fromRoot.AppState>) {
        store.select(fromRoot.getCitiesState).subscribe(
            (cities: any) => {
                this.cities = cities;
            }
        );
    }

    getWeatherCities() {
        const ids: any[] = this.cities.cities.map( city => city.id );
        return this.http.get(
            AppConfig.API_URL + '?id=' + ids + '&appid' + AppConfig.API_KEY
        );
    }
}
