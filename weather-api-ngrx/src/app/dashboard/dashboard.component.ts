import { ChangeDetectorRef, Component } from '@angular/core';
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

  public validationError: string = '';

  constructor(private store: Store<State>, public weatherService: WeatherService, private detectChang: ChangeDetectorRef) {
    store.select(selectLocationList)
      .subscribe(locals => this.locations = locals);
      
    store.select(selectWeatherList)
      .subscribe(calls => this.weatherCalls = calls);
  }

  locationValidation(location: string) {
    if (this.locations.includes(location)) {
      this.validationError = 'Location was already searched'
    }
    else if (location == '') {
      this.validationError = 'Location field was left blank'
    }
    else {
      this.validationError = '';
      this.addLocation(location);
    }
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
      });
      console.log(this.weatherCall);
  }

}
