import {
    ActionReducerMap,
    createSelector,
    MetaReducer
} from '@ngrx/store';

import { environment } from 'src/environments/environment.prod';

import { locationReducer, LocationState } from './locations.reducer';
import { weatherReducer, WeatherState } from './weather.reducer';

export interface State {
    locations: LocationState,
    weatherCalls: WeatherState
}

export const reducers: ActionReducerMap<State> = {
    locations: locationReducer,
    weatherCalls: weatherReducer
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? []: [];

export const selectLocationState = (state: State) => state.locations;
export const selectLocationList = createSelector(selectLocationState, (state: LocationState) => state.locations);

export const selectWeatherState = (state: State) => state.weatherCalls;
export const selectWeatherList = createSelector(selectWeatherState, (state: WeatherState) => state.weatherCalls);
