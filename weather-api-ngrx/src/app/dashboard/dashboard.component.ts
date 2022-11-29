import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddLocation, RemoveLocation } from '../actions/location.actions';
import { selectLocationList, selectWeatherList, State } from '../reducers';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  locations: Array<string>;

  weatherCalls: Map<string, any>;

  public weatherCall: any;

  constructor(private store: Store<State>, public weatherService: WeatherService) {
    store.select(selectLocationList)
      .subscribe(locals => this.locations = locals);
      
    store.select(selectWeatherList)
      .subscribe(calls => this.weatherCalls = calls);
  }

  addLocation(location: string) {
    this.store.dispatch(new AddLocation(location));
    console.log(this.locations);
    console.log(this.weatherCalls);
  }

  removeLocation(local: string) {
    this.store.dispatch(new RemoveLocation(local));
  }

  loadWeatherCall(location: string) {
    this.weatherService
      .loadWeather(location)
      .subscribe(data => {
        this.weatherCall = data
        console.log(this.weatherCall);
      });
  }

  reverseCallOrder() {
    const reversed = new Map(Array.from(this.weatherCalls).reverse());
    this.weatherCalls = reversed
  }


}
