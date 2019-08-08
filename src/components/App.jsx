import React from 'react';
import ConvertForm from './ConvertForm';
import ResultPreview from './ResultPreview';

export default class App extends React.Component {
  state = { schema: '', inputFile: null, exportData: [], converting: false };

  onSchemaSelected = schema => {
    this.setState({ schema });
    if (this.shouldConvertImportedData(schema, this.state.inputFile)) {
      this.convertImportedData();
    }
  };

  onFileUpload = async files => {
    await this.setState({ inputFile: files[0] });
    if (this.shouldConvertImportedData(this.state.schema, files[0])) {
      this.convertImportedData();
    }
  };

  shouldConvertImportedData = (schema, file) => {
    const schemaChanged = schema !== '' || this.state.schema !== schema;
    const inputFileChanged = this.state.inputFile !== file;
    return !!file && (schemaChanged || inputFileChanged);
  };

  convertImportedData = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <ConvertForm
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
