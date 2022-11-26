import { createAction, props } from "@ngrx/store";

export const search = createAction(
    '[Weather Component] Search',
    props<{ location: string; }>()
);

export const add = createAction(
    '[Weather Component] Add',
    
)