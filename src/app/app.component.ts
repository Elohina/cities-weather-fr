import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './common/index';
import * as cities from './common/city.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public wheathers$: Observable<any>;

  constructor(private store: Store<fromRoot.AppState>) {
    this.wheathers$ = this.store.select('wheathers');
  }

  ngOnInit() {
    let intervalId = setInterval(() => {
      this.store.dispatch(new cities.UpdateWheatherAction());
    }, 1000 * 1 * 60 * 3);
    this.store.dispatch(new cities.UpdateWheatherAction());
  }
}
