import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-api-rdx';

  weatherList:string[]=[];

  public addNewWeather(location: string)
  {
    this.weatherList.push(location);
  }
}
