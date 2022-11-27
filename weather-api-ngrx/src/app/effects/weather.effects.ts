import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { mergeMap, catchError, map } from "rxjs/operators";
import { LocationActionTypes } from "../actions/location.actions";
import { WeatherService } from "../weather.service";
import { WeatherSuccess, WeatherFailed } from "../actions/weather.actions";



@Injectable()
export class WeatherEffects {

    loadWeather$: Observable<any> = this.actions$.pipe(
        ofType(LocationActionTypes.AddLocation),
        mergeMap(action =>
            this.weatherService.loadWeather(action['location']).pipe(
                map(data => new WeatherSuccess(action['location'], data)),
                catchError((err) => of(new WeatherFailed(action['location'], err)))
            )
        )
    );

    constructor(
        private actions$: Actions,
        private weatherService: WeatherService
    ) {}
}