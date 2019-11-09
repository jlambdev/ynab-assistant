import { AnyAction, combineReducers } from 'redux';
import { State } from './types';
import { initialState } from './state';

function reducer(state = initialState, action: AnyAction): State {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers(reducer);
