import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { WeatherCall } from "../models/weatherCall.model";
import * as WeatherCallActions from '../actions/weatherCall.actions';
import { Action, createReducer, on } from "@ngrx/store";


export interface State extends EntityState<WeatherCall> {
    selectedWeatherCallId: number | null;
}

export const adapter: EntityAdapter<WeatherCall> = createEntityAdapter<WeatherCall>();

export const initialState: State = adapter.getInitialState({
    selectedWeatherCallId: null,
});

const weatherCallReducer = createReducer(
    initialState,
    on(WeatherCallActions.addWeathrCall, (state, { weatherCall }) => {
        return adapter.addOne(weatherCall, state)
    })
)