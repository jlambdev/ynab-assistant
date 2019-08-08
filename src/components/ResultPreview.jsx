import React from 'react';

const ResultPreview = props => {
  if (props.converting) {
    return (
      <div class="ui active inverted dimmer">
        <div class="ui text loader">Converting...</div>
      </div>
    );
  } else {
    if (!props.exportData.length) {
      return <div>Please select a Schema and File</div>;
    }
    return (
      <table class="ui celled table">
        <thead>
          <tr>
            <th>Desc</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Desc">Description</td>
          </tr>
        </tbody>
      </table>
    );
  }
};

export default ResultPreview;
