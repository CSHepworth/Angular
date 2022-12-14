import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherCalls = [];

  constructor(private http: HttpClient) { }

  loadWeather(location: string): Observable<any> {
    return this.http.get(
      `http://api.weatherapi.com/v1/current.json?key=44cec275959c4e4aa2a02110222211&q=${location}`
    );
  }

  removeWeatherCall(location: string) {
    for (let i in this.weatherCalls) {
      if (this.weatherCalls[i].local == location)
        this.weatherCalls.splice(+i, 1);
    }
  }

  getWeatherCalls(): any[] {
    return this.weatherCalls;
  }

}
