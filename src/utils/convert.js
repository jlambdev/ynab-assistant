export const stripHeaderRow = input => input.shift();

export const prependHeaderRow = (input, headerRow) => input.unshift(headerRow);

export const trimDate = date => date.substring(0, 10);

export const convertRow = (row, columns) => {
  return columns.map(columnNo => row[columnNo]);
};

export const convert = (input, schema) => {
  stripHeaderRow(input);
  const convertedRows = input.map(row => {
    const result = convertRow(row, schema.columnMap);
    if (schema.trimDate) {
      result[0] = trimDate(result[0]);
    }
    return result;
  });
  prependHeaderRow(convertedRows, schema.headers);
  return convertedRows;
};
