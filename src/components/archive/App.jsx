import React from "react";
import * as CSV from "csv-string/";
import { SCHEMAS } from "../../utils/constants";
import { convert } from "../../utils/convert";
import ConvertForm from "./ConvertForm";
import ResultPreview from "./ResultPreview";

export default class App extends React.Component {
    state = { schema: "", inputFile: null, exportData: [], converting: false };

    onSchemaSelected = (schema) => {
        this.setState({ schema });
    };

    onFileUpload = async (files) => {
        await this.setState({ inputFile: files[files.length - 1] });
        if (!!this.state.inputFile) {
            this.convertImportedData();
        }
    };

    convertImportedData = () => {
        this.setState({ converting: true });

        const reader = new FileReader();
        reader.readAsText(this.state.inputFile);
        reader.addEventListener("loadend", () => {
            const convertedRows = convert(
                CSV.parse(reader.result),
                SCHEMAS[this.state.schema]
            );
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
                        this.state.calculating ||
                        this.state.exportData.length === 0
                    }
                    exportData={this.state.exportData}
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
