import React from "react";
import ConvertForm from "./ConvertForm";
import ResultPreview from "./ResultPreview";

export default class App extends React.Component {
  state = { schema: null, inputFile: null, exportData: [] };

  onFileUpload = file => {
    console.log(file);
  };

  onFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <ConvertForm
          onFileUpload={this.onFileUpload}
          onFormSubmit={this.onFormSubmit}
        >
          <ResultPreview />
        </ConvertForm>
      </div>
    );
  }
}
