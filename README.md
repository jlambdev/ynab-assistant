# YNAB Assistant

Work in progress. Bootstrapped with Create React App.

A React Single Page Application to:

- Convert CSV files of transactions to a format that can be uploaded to the You Need A Budget web application.
- Create YNAB CSV import files manually (pending future requirement).

## Version 0.2.0 notes

- Switch to Yarn
- Integrate Redux, Redux-Saga and Styled Components
- New workflow:
  1. (YNAB API?) Identify last recorded transaction date for each account; Identify if new data is needed
  2. Download CSVs from banks
  3. Convert CSVs (may need to cut from a certain date)
  4. (YNAB API?) Upload to YNAB
  5. (YNAB API?) Confirm budget balances match account balances
- Consider integrating Circle CI, ESLint etc.
