import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) { }
  
  getWeather(location: string) {
    return this.http.get(
      'http://api.weatherapi.com/v1/current.json?key=44cec275959c4e4aa2a02110222211&q=' + location
    );
  }
}
