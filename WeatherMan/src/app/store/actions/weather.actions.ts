import { createAction, props } from "@ngrx/store";

export const search = createAction(
    '[weather-search] Search',
    props<{ searchItem: Location }>()
);

