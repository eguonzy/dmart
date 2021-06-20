import React from "react";

function InputRow({ label, defaultValue, type }) {
  return (
    <div className="input-row">
      <p>{label}</p>
      <input name={label} type={type} defaultValue={defaultValue} />
    </div>
  );
}

export default InputRow;
