import { put, call, takeLatest } from 'redux-saga/effects';
import * as ynab from 'ynab';

import config from '../config/environment';
import { GetAccountTransactionsAction } from './types';
import {
    GET_ACCOUNT_TRANSACTIONS,
    GET_ACCOUNT_TRANSACTIONS_SUCCESS,
    GET_ACCOUNT_TRANSACTIONS_FAILED,
} from './actionTypes';

// Exported for testing purposes
export const ynabApi = new ynab.API(config.ACCESS_TOKEN);

// function* getData(): Generator {
//     yield ynabApi.accounts
//         .getAccounts(config.BUDGET_ID_USD)
//         .then(response => console.log({ response }));
//     const apiCall = ynabApi.accounts.getAccounts;
//     const data = yield call(apiCall, config.BUDGET_ID_EUR);
//     console.log({ data });
//     yield put({ type: GET_ACCOUNT_TRANSACTIONS_SUCCESS });
// }

export function* getAccountTransactions({
    payload: { budgetId, accountId },
}: GetAccountTransactionsAction): Generator {
    const apiCall = ynabApi.transactions.getTransactionsByAccount;
    const response = yield call(apiCall, budgetId, accountId);

    yield put({
        type: GET_ACCOUNT_TRANSACTIONS_SUCCESS,
        payload: { data: [] },
    });
}

export default function* rootSaga(): Generator {
    yield takeLatest(GET_ACCOUNT_TRANSACTIONS, getAccountTransactions);
}
