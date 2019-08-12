import React from 'react';

class ResultPreview extends React.PureComponent {
  render() {
    if (this.props.converting) {
      return (
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Converting...</div>
        </div>
      );
    } else {
      if (!this.props.exportData.length) {
        return <div>Please select a Schema and File</div>;
      }

      const headerRow = this.props.exportData
        .shift()
        .map(column => <th key={column}>{column}</th>);

      // TODO: consider something a bit better for key names here, seems a bit random
      const tableRows = this.props.exportData.map((row, index) => {
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
  }
}

export default ResultPreview;
