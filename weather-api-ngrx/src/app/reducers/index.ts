import {
    ActionReducer,
    ActionReducerMap,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment.prod';

import { locationReducer, LocationState } from './locations.reducer';

export interface State {
    locations: LocationState,
}

export const reducers: ActionReducerMap<State> = {
    locations: locationReducer,
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? []: [];

export const selectLocationState = (state: State) => state.locations;

export const selectLocationList = createSelector(selectLocationState, (state: LocationState) => state.locations);