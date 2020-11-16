import moment from 'moment';

interface Schema {
    path: string;
    headers: string[];
    columnMap: number[];
    trimDate?: boolean;
    formatDate?: boolean;
    cropRows?: number;
}

export const stripHeaderRow = (input: string[][]) => input.shift();

export const prependHeaderRow = (input: string[][], headerRow: string[]) => input.unshift(headerRow);

export const trimDate = (date: string) => date.substring(0, 10);

export const formatDate = (date: string) => moment(date).format('YYYY-MM-DD');

export const cropRows = (input: string[][], cropBy: number) => input.slice(cropBy);

export const convertRow = (row: string[], columns: number[]) => {
    return columns.map((columnNo) => row[columnNo]);
};

export const convert = (input: string[][], schema: Schema) => {
    let modifiedInput = input;
    if (schema.cropRows) {
        modifiedInput = cropRows(input, schema.cropRows);
    }
    stripHeaderRow(modifiedInput);
    const convertedRows = modifiedInput.map((row) => {
        const result = convertRow(row, schema.columnMap);
        if (schema.trimDate) {
            result[0] = trimDate(result[0]);
        }
        if (schema.formatDate) {
            result[0] = formatDate(result[0]);
        }
        return result;
    });
    prependHeaderRow(convertedRows, schema.headers);
    return convertedRows;
};
