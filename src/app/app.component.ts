import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './common/index';
import * as cities from './common/city.actions';
import { Observable } from 'rxjs/Observable';

interface AppState {
  cities: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cities$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.cities$ = this.store.select('cities');
  }

  ngOnInit() {
    this.store.dispatch(new cities.UpdateWheatherAction());
  }
}
