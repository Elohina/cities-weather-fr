import { TestBed, async } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CitiesWeatherListComponent } from './cities-weather-list/cities-weather-list.component';
import { CitiesWeatherReducer } from './common/cities-weather.reducer';
import * as fromRoot from './common/index';

import * as index from './common/index';

describe('AppComponent', () => {
  let store: Store<any>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CitiesWeatherListComponent
      ],
      imports: [ StoreModule.forRoot({ weather: CitiesWeatherReducer }) ],
      providers: [
        Store
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    store = fixture.debugElement.injector.get(Store);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', (() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Weather App');
  }));
});
