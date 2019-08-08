import React from 'react';
import Files from 'react-files';

const ConvertForm = props => {
  return (
    <div>
      <div className="ui raised very padded container segment">
        <select
          className="ui selection dropdown"
          style={{ paddingBottom: '5px' }}
          onChange={e => props.onSchemaSelected(e.target.value)}
        >
          <option value="">Select Import Schema</option>
          <option value="n26">N26</option>
          <option value="lloyds">Lloyds</option>
          <option value="monzo">Monzo</option>
        </select>
      </div>

      <div className="ui two column grid container">
        <div className="ui raised very padded container segment column">
          <Files
            onChange={e => props.onFileUpload(e)}
            onError={e => console.log(e)}
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
          <button className="ui basic button">
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
