import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../common/index';
import * as layout from '../common/cities-weather.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cities-weather-list',
  templateUrl: './cities-weather-list.component.html',
  styleUrls: ['./cities-weather-list.component.css']
})
export class CitiesWeatherListComponent {
  @Input('weatherState') weatherState: any;
  constructor() {
  }
}
