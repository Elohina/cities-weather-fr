import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { metaReducer } from './common/index';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';
import { CitiesWeatherService } from './common/cities-weather.service';
import { CitiesWeatherListComponent } from './cities-weather-list/cities-weather-list.component';
import { CitiesWeatherEffects } from './common/cities-weather.effects';
import { CitiesWeatherReducer } from './common/cities-weather.reducer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesWeatherListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({weather: CitiesWeatherReducer}),
    EffectsModule.forRoot([CitiesWeatherEffects]),
    HttpModule
  ],
  providers: [CitiesWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
