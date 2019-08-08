import React from "react";

const ConvertForm = props => {
  return (
    <div>
      <label for="schema-select">Schema:</label>
      <select id="schema-select">
        <option value="">--Please choose a schema--</option>
        <option value="n26">N26</option>
        <option value="lloyds">Lloyds</option>
        <option value="monzo">Monzo</option>
      </select>
      <br />

      <label for="input-file-select">Input File:</label>
      <input
        id="input-file-select"
        type="file"
        name="input-file"
        accept=".csv"
      />

      {props.children}

      <div>Convert</div>
    </div>
  );
};

export default ConvertForm;
