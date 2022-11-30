//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

//Components
import { AppComponent } from './app.component';
import { SearchWeatherComponent } from './search-weather/search-weather.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherComponent } from './weather/weather.component';
import { DetailsComponent } from './details/details.component';

//Services
import { LocationService } from './location.service';
import { WeatherService } from './weather.service';

//Other
import { reducers, metaReducers } from './reducers';
import { WeatherEffects } from './effects/weather.effects';




@NgModule({
  declarations: [
    AppComponent,
    SearchWeatherComponent,
    DashboardComponent,
    WeatherComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([ WeatherEffects ]),
    StoreModule.forRoot( reducers, { metaReducers } ),
    
  ],
  providers: [LocationService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
