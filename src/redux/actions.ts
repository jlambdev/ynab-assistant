import { AnyAction } from 'redux';
import { YNAB_DATA } from './actionTypes';

export function getYnabData(): AnyAction {
    return { type: YNAB_DATA };
}
