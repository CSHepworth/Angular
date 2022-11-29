import { MapType } from '@angular/compiler';
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

  reverseOrder(weatherCall: any) {
    const reversedWeatherCalls = new Map(Array.from(this.weatherCalls).reverse());
    this.weatherCalls = reversedWeatherCalls;
    console.log(this.weatherCalls);
  }


}
