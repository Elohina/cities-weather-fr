import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { metaReducer } from './common/index';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';
import { CitiesService } from './common/city.service';
import { CitiesListComponent } from './cities-list/city.component';
import { CityEffects } from './common/city.effects';
import { reducer } from './common/city.reducer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({cities: reducer}),
    EffectsModule.forRoot([CityEffects]),
    HttpModule
  ],
  providers: [CitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
