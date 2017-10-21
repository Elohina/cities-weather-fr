import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../common/index';
import * as layout from '../common/city.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cities-list',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CitiesListComponent {
  @Input('cities') cities: any;
  constructor() {
  }
}
