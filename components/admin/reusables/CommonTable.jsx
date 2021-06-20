import React from "react";

function CommonTable(props) {
  const { orders, newItem, store, reviews, stock, tbody } = props;
  return (
    <table>
      <thead>
        <tr>
          {" "}
          {props[props.header].th.map((td, index) => (
            <td key={index + td}>{td}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.newItem &&
          tbody.map(({ name }, index) => (
            <tr key={name + index}>
              <td></td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default CommonTable;
