import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { Store } from '@ngrx/store';
import { selectLocationList, selectWeatherList, State } from '../reducers';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

    location: any;

    weatherCalls: Map<string, any>;

    public weatherCall: any; 

    constructor(
      private store: Store<State>,
      private route: ActivatedRoute,
      private weatherService: WeatherService,
    ) {
      store.select(selectLocationList)
        .subscribe(local => this.location = local);
      store.select(selectWeatherList)
        .subscribe(call => this.weatherCall = call);
    }

    ngOnInit(): void {
      const loadedLocation = String(this.route.snapshot.paramMap.get('location'));
        console.log(loadedLocation);
      this.loadWeatherCall(loadedLocation);
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
