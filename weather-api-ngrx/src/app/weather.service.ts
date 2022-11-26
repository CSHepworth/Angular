import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherCalls = [];

  constructor(private http: HttpClient) { }

  getWeatherAtLocation(location: string): Observable<any> {
    return this.http.get(
      'http://api.weatherapi.com/v1/current.json?key=44cec275959c4e4aa2a02110222211&q=' + location
    );
  }

  getWeatherCalls(): any[] {
    return this.weatherCalls;
  }
}
