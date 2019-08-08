import React from 'react';

const ResultPreview = props => {
  if (props.converting) {
    return (
      <div class="ui active inverted dimmer">
        <div class="ui text loader">Converting...</div>
      </div>
    );
  } else {
    return (
      <div>
        <h4>Result Preview</h4>
      </div>
    );
  }
};

export default ResultPreview;
