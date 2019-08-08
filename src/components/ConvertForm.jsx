import React from 'react';
import Files from 'react-files';

const ConvertForm = props => {
  const schemaOptions = Object.keys(props.schemas).map(schema => {
    return (
      <option key={schema} value={schema}>
        {schema.toUpperCase()}
      </option>
    );
  });

  return (
    <div>
      <div className="ui raised very padded container segment">
        <select
          className="ui selection dropdown"
          style={{ paddingBottom: '5px' }}
          onChange={e => props.onSchemaSelected(e.target.value)}
        >
          <option value="">Select Import Schema</option>
          {schemaOptions}
        </select>
      </div>

      <div className="ui two column grid container">
        <div className="ui raised very padded container segment column">
          <Files
            onChange={files => props.onFileUpload(files)}
            onError={err => console.error(err)}
            accepts={['.csv']}
            maxFileSize={10000000}
            minFileSize={0}
          >
            <button className="ui basic button">
              <i className="icon cloud upload" />
              Drop file or click to Upload
            </button>
          </Files>
        </div>

        <div className="ui raised very padded container segment column">
          <button className="ui basic button" disabled>
            <i className="icon cloud download" />
            Export to CSV
          </button>
        </div>
      </div>

      <div className="ui raised very padded container segment">
        {props.children}
      </div>
    </div>
  );
};

export default ConvertForm;
