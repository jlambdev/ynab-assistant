const {
    REACT_APP_YNAB_ACCESS_TOKEN,
    REACT_APP_BUDGET_ID_EUR,
    REACT_APP_BUDGET_ID_GBP,
    REACT_APP_BUDGET_ID_USD,
} = process.env;

const config: {
    ACCESS_TOKEN: string;
    BUDGET_ID_EUR: string;
    BUDGET_ID_GBP: string;
    BUDGET_ID_USD: string;
} = {
    ACCESS_TOKEN: REACT_APP_YNAB_ACCESS_TOKEN || '',
    BUDGET_ID_EUR: REACT_APP_BUDGET_ID_EUR || '',
    BUDGET_ID_GBP: REACT_APP_BUDGET_ID_GBP || '',
    BUDGET_ID_USD: REACT_APP_BUDGET_ID_USD || '',
};

export default config;
