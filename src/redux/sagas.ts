import { put, call, takeLatest } from 'redux-saga/effects';
import * as ynab from 'ynab';

import config from '../config/environment';
import { YNAB_DATA, YNAB_DATA_SUCCESS } from './actionTypes';

const ynabApi = new ynab.API(config.ACCESS_TOKEN);

function* getData(): Generator {
    yield ynabApi.accounts
        .getAccounts(config.BUDGET_ID_USD)
        .then(response => console.log({ response }));
    const apiCall = ynabApi.accounts.getAccounts;
    const data = yield call(apiCall, config.BUDGET_ID_EUR);
    console.log({ data });
    yield put({ type: YNAB_DATA_SUCCESS });
}

export default function* rootSaga(): Generator {
    yield takeLatest(YNAB_DATA, getData);
}
