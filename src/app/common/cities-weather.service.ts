import { Injectable } from '@angular/core';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { AppConfig } from '../app.config';

@Injectable()
export class CitiesWeatherService {
    constructor(private http: Http) {}

    getWeatherCities() {
        const ids: any[] = AppConfig.CITIES;
        return this.http.get(
            AppConfig.API_URL + '&id=' + ids + '&appid=' + AppConfig.API_KEY
        );
    }
}
