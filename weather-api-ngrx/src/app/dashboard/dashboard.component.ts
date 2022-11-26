import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddLocation, RemoveLocation } from '../actions/location.actions';
import { selectLocationList, State } from '../reducers';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  locations: Array<string> = [];

  weatherCalls: Map<string, any>;

  constructor(private store: Store<State>, public weatherService: WeatherService) {
    store.select(selectLocationList)
      .subscribe(locals => this.locations = locals);
    store.select()
  }

  addLocation(location: string) {
    this.store.dispatch(new AddLocation(location));
    console.log(this.locations);
  }

  removeLocation(local: string) {
    this.store.dispatch(new RemoveLocation(local));
  }
}
