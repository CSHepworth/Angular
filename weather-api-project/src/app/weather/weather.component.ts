import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public weatherSearchForm!: FormGroup;

  public weatherData: any;

  public weatherCalls: Array<any> = [];

  constructor(
    private formBuilder: FormBuilder,
    private weatherApiService: WeatherApiService   
  ) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });
  }

  sendToWeatherApi(formValues: { location: string }) {
    this.weatherApiService
      .getWeather(formValues.location)
      .subscribe(data => {
        this.weatherData = data
        console.log(this.weatherData);
        this.weatherCalls?.push(data);
        console.log(this.weatherCalls);
    });
  }
}
