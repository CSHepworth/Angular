import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-search-weather',
  templateUrl: './search-weather.component.html',
  styleUrls: ['./search-weather.component.scss']
})
export class SearchWeatherComponent {
  @Output()
  locationSearch = new EventEmitter<string>();

  @Input()
  validationError: string;
}
