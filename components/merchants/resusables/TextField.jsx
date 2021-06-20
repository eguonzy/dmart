import React from "react";

function TextField({ label, value }) {
  return (
    <div className="input-con">
      <label>{label}</label>
      <textarea
        defaultValue={value}
        required
        name="description"
        rows="20"
        cols="1"
      />
    </div>
  );
}

export default TextField;
