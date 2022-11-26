import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { weatherFeatureKey, weatherReducer } from './store/reducers/weather.reducer';
import { WeatherSearchComponent } from './weather-search/weather-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forFeature({ weatherFeatureKey, weatherReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
