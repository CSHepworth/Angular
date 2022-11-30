import { Injectable } from '@angular/core';

export const locations : string = "locations";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locations : string[] = [];

  constructor() { }

  addLocation(location: string) {
    this.locations.push(location);
  }

  removeLocation(location: string) {
    let i = locations.indexOf(location);
    if (i !== -1) {
      this.locations.splice(i, 1);
    }
  }

  getLocations(): string[] {
    return this.locations;
  }
}
