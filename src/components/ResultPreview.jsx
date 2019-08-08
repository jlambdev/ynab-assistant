import React from 'react';

const ResultPreview = props => {
  if (props.converting) {
    return (
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Converting...</div>
      </div>
    );
  } else {
    if (!props.exportData.length) {
      return <div>Please select a Schema and File</div>;
    }

    const headerRow = props.exportData
      .shift()
      .map(column => <th key={column}>{column}</th>);

    const tableRows = props.exportData.map((row, index) => {
      return (
        <tr key={`row_${index}`}>
          {row.map(data => (
            <td key={`${index}_${data}`}>{data}</td>
          ))}
        </tr>
      );
    });

    return (
      <table className="ui celled table">
        <thead>
          <tr>{headerRow}</tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    );
  }
};

export default ResultPreview;
