export const DATE = 'Date',
    DESCRIPTION = 'Description',
    OUTFLOW = 'Outflow',
    INFLOW = 'Inflow',
    AMOUNT = 'Amount',
    SCHEMAS = {
        n26: {
            path: 'YNAB_n26.csv',
            headers: [DATE, DESCRIPTION, AMOUNT],
            columnMap: [0, 1, 6],
        },
        lloyds: {
            path: 'YNAB_lloyds.csv',
            headers: [DATE, DESCRIPTION, OUTFLOW, INFLOW],
            columnMap: [0, 4, 5, 6],
        },
        monzo: {
            path: 'YNAB_monzo.csv',
            headers: [DATE, DESCRIPTION, AMOUNT],
            columnMap: [1, 14, 7],
        },
        transferwise: {
            path: 'YNAB_transferwise.csv',
            headers: [DATE, DESCRIPTION, AMOUNT],
            columnMap: [1, 4, 2],
        },
        revolut: {
            path: 'YNAB_revolut.csv',
            headers: [DATE, DESCRIPTION, OUTFLOW, INFLOW],
            columnMap: [0, 1, 2, 3],
            formatDate: true,
        },
        dkb: {
            path: 'YNAB_dkb.csv',
            headers: [DATE, DESCRIPTION, AMOUNT],
            columnMap: [1, 3, 4],
            cropRows: 6,
        },
    };
