import { WeatherActions, WeatherActionTypes } from "../actions/weather.actions";

export interface WeatherState {
    weatherCalls: Map<string, any>;
}

export const initialState: WeatherState = {
    weatherCalls: new Map()
};

export function weatherReducer(state = initialState, action: WeatherActions): WeatherState {
    switch (action.type) {
        case WeatherActionTypes.WeatherSuccess:
            const w = new Map(state.weatherCalls);
            w.set(action.location, action.weather);
            return {...state, weatherCalls: w};
        default:
            return state;
    }
}