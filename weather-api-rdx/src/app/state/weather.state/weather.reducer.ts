import { createReducer, on, Action } from '@ngrx/store';
import { add, search } from './weather.actions';


export const initialState = {
    weatherList: [],
}

export function weatherListReducer(
    state = initialState,
    action: Action) {
        switch(action.type) {
            case 'ADD_WEATHER':
                return {...state, weatherList: [...state.weatherList, action]};
        }
    }