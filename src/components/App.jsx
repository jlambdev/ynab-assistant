import React from 'react';
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
      // TODO: do the conversion here and refactor later

      console.log(reader.result);
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
