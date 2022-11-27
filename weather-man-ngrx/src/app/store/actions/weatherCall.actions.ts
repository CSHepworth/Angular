import { createAction, props } from '@ngrx/store'
import { WeatherCall } from "../models/weatherCall.model";
import { EntityMap } from '@ngrx/entity';

export const loadWeatherCalls = createAction('[WeatherCall/API] Load Weather Calls', props<{ weatherCalls: WeatherCall[] }>());

export const addWeathrCall = createAction('[WeatherCall/API] Add Weather Call', props<{ weatherCall: WeatherCall }>());

export const mapWeatherCalls = createAction('[WeatherCall/API], Map WeatherCalls', props<{ entityMap: EntityMap<WeatherCall> }>());

export const deleteWeatherCall = createAction('[WeatherCall/API] Delete Weather Call', props<{ id: string }>());

export const clearWeatherCalls = createAction('[WeatherCall/API], Clear Weather Calls');