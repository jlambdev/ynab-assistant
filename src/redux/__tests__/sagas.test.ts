import { takeLatest, call, put } from 'redux-saga/effects';

import rootSaga, { getAccountTransactions, ynabApi } from '../sagas';
import {
    GET_ACCOUNT_TRANSACTIONS,
    GET_ACCOUNT_TRANSACTIONS_SUCCESS,
    GET_ACCOUNT_TRANSACTIONS_FAILED,
} from '../actionTypes';

jest.mock('ynab', () => ({
    API: jest.fn(() => ({
        transactions: {
            getTransactionsByAccount: jest.fn(() => ({ data: [] })),
        },
    })),
}));

describe('sagas', () => {
    describe('root saga', () => {
        it('should watch GET_ACCOUNT_TRANSACTIONS and call getAccountTransactions saga', () => {
            const effect = rootSaga().next().value;
            expect(effect).toStrictEqual(
                takeLatest(GET_ACCOUNT_TRANSACTIONS, getAccountTransactions),
            );
        });
    });

    describe('getAccountTransactions saga', () => {
        it('should call the YNAB API and emit SUCCESS action with data on API call success', () => {
            const action = {
                type: GET_ACCOUNT_TRANSACTIONS,
                payload: {
                    budgetId: '9988-budget-3344',
                    accountId: '1234-account-5678',
                },
            };
            const gen = getAccountTransactions(action);

            const effect = gen.next().value;
            expect(effect).toStrictEqual(
                call(
                    ynabApi.transactions.getTransactionsByAccount,
                    '9988-budget-3344',
                    '1234-account-5678',
                ),
            );
            expect(gen.next().value).toStrictEqual(
                put({
                    type: GET_ACCOUNT_TRANSACTIONS_SUCCESS,
                    payload: { data: [] },
                }),
            );
        });

        it.todo(
            'should call the YNAB API and emit FAILED with the account ID on API call failure',
        );

        it.todo('should emit a FAILED action if an Error was thrown');
    });

    describe('convertCsvData saga', () => {
        it.todo('should exist and have some tests');
    });

    describe('uploadTransactions saga', () => {
        it.todo('should exist and have some tests');
    });
});
