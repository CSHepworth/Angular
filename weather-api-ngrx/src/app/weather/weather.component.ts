import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  @Input()
  locations: Array<string>;
  @Input()
  weatherCalls: Map<string, any>;
  @Output()
  locationDeleted = new EventEmitter<string>();
  @Output()
  orderReversed = new EventEmitter<any>();

  public weatherCall: any;

  

  constructor(public weatherService: WeatherService) { }

  getWeather(location: string) {
    return this.weatherCalls.get(location);
  }

  public showFilters: boolean = false;
  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  public temp_f: boolean = true;
  toggleTemp_F() {
    this.temp_f = !this.temp_f 
  }

  public temp_c: boolean = false;
  toggleTemp_C() {
    this.temp_c = !this.temp_c
  }

  public currentConditions: boolean = true;
  toggleCurrentConditions() {
    this.currentConditions = !this.currentConditions
  }

  public wind: boolean = true;
  toggleWind() {
    this.wind = !this.wind
  }
  
  public humidity: boolean = true;
  toggleHumidity() {
    this.humidity = !this.humidity
  }

  public precip: boolean = false;
  togglePrecip() {
    this.precip = !this.precip
  }

  public feelsLike: boolean = false;
  toggleFeelsLike() {
    this.feelsLike = !this.feelsLike
  } 
}
