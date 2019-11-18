export interface State {
    data: string[];
}

export type GetAccountTransactionsAction = {
    type: string;
    payload: {
        budgetId: string;
        accountId: string;
    };
};
