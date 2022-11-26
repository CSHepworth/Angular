import { locationReducer, initialState, LocationState } from "./locations.reducer";

describe('Location Reducer', () => {
    describe('undefined action', () => {
        it('should return initial state', () => {
            const action = {} as any;

            const result = locationReducer(initialState, action);

            expect(result).toBe(initialState);
        });
    });
});

