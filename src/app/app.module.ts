import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { metaReducer } from './common/index';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';
import { WheathersService } from './common/wheathers.service';
import { WheathersListComponent } from './wheathers-list/wheathers-list.component';
import { WheathersEffects } from './common/wheathers.effects';
import { reducer } from './common/wheathers.reducer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    WheathersListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({wheathers: reducer}),
    EffectsModule.forRoot([WheathersEffects]),
    HttpModule
  ],
  providers: [WheathersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
