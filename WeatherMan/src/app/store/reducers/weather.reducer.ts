import { Action, createReducer, on } from '@ngrx/store';
import { search } from '../actions/weather.actions';

export interface LocationState {
    location: string;
}

export const initialState: LocationState = {
    location: '',
}

export const weatherFeatureKey = 'searchItem';

export const weatherReducer = createReducer(
    initialState,
    on(search, (state, { searchItem }) => ({ location: searchItem.Location }))
);