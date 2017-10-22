import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './common/index';
import * as cities from './common/cities-weather.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public weatherState$: Observable<any>;

  constructor(private store: Store<fromRoot.AppState>) {
    this.weatherState$ = this.store.select('weather');
  }

  ngOnInit() {
    const intervalId = setInterval(() => {
      this.store.dispatch(new cities.UpdateWeatherAction());
    }, 180000);
    this.store.dispatch(new cities.UpdateWeatherAction());
  }
}
