import React from 'react';
import * as CSV from 'csv-string/';
import ConvertForm from './ConvertForm';
import ResultPreview from './ResultPreview';

// TODO: consider factoring out constants
const DATE = 'Date',
  DESCRIPTION = 'Description',
  OUTFLOW = 'Outflow',
  INFLOW = 'Inflow',
  AMOUNT = 'Amount',
  SCHEMAS = {
    n26: {
      path: 'n26_import.csv',
      headers: [DATE, DESCRIPTION, AMOUNT]
    },
    lloyds: {
      path: 'lloyds_import.csv',
      headers: [DATE, DESCRIPTION, OUTFLOW, INFLOW]
    },
    monzo: {
      path: 'monzo_import.csv',
      headers: [DATE, DESCRIPTION, AMOUNT]
    }
  };

export default class App extends React.Component {
  state = { schema: '', inputFile: null, exportData: [], converting: false };

  onSchemaSelected = schema => {
    this.setState({ schema });
    if (this.shouldConvertImportedData(schema, this.state.inputFile)) {
      this.convertImportedData();
    }
  };

  onFileUpload = async files => {
    await this.setState({ inputFile: files[files.length - 1] });
    if (
      this.shouldConvertImportedData(this.state.schema, files[files.length - 1])
    ) {
      this.convertImportedData();
    }
  };

  // TODO: consider only doing conversion when new file is uploaded
  shouldConvertImportedData = (schema, file) => {
    const schemaChanged = schema !== '' || this.state.schema !== schema;
    const inputFileChanged = this.state.inputFile !== file;
    return !!file && (schemaChanged || inputFileChanged);
  };

  convertImportedData = () => {
    this.setState({ converting: true });

    const reader = new FileReader();
    reader.readAsText(this.state.inputFile);
    reader.addEventListener('loadend', () => {
      const inputRows = CSV.parse(reader.result);
      inputRows.shift();

      const convertedRows = [];
      // TODO: need to create a method that will return an array of values based on the schema
      // const convertedRows = inputRows.map(row => {
      //   return []
      // });
      convertedRows.unshift(SCHEMAS[this.state.schema].headers);

      this.setState({ exportData: convertedRows });
    });

    this.setState({ converting: false });
  };

  render() {
    return (
      <div>
        <ConvertForm
          schemas={SCHEMAS}
          onSchemaSelected={this.onSchemaSelected}
          onFileUpload={this.onFileUpload}
          disableExportDownload={
            this.state.calculating || this.state.exportData.length === 0
          }
        >
          <ResultPreview
            exportData={this.state.exportData}
            calculating={this.state.converting}
          />
        </ConvertForm>
      </div>
    );
  }
}
