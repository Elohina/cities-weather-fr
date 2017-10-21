import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../common/index';
import * as layout from '../common/wheathers.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-wheathers-list',
  templateUrl: './wheathers-list.component.html',
  styleUrls: ['./wheathers-list.component.css']
})
export class WheathersListComponent {
  @Input('wheathersState') wheathersState: any;
  constructor() {
  }
}
