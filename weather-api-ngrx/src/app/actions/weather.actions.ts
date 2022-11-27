import { Action } from "@ngrx/store";

export enum WeatherActionTypes {
    WeatherSuccess = '[Weather] Weather Loaded',
    WeatherFailed = '[Weather] Weather failed to load'
}

export class WeatherSuccess implements Action {
    readonly type = WeatherActionTypes.WeatherSuccess;

    constructor(public location: string, public weather: any) { }
}

export class WeatherFailed implements Action {
    readonly type = WeatherActionTypes.WeatherFailed;

    constructor(public location: string, public error: any) { }
}

export type WeatherActions = WeatherSuccess | WeatherFailed;