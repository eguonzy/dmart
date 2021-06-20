import React from "react";

function Table({ paged, handleEdit, prev }) {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>

          <th>Name</th>
          <th>Quantity</th>
          <th>Unit Price (&#8358;)</th>
          <th>Bulk Price (&#8358;)</th>
        </tr>
      </thead>
      <tbody>
        {paged.map((item, i) => (
          <tr
            tabIndex={0}
            key={i + item.quantity}
            onClick={(e) => handleEdit(e, item)}
          >
            <td>{i + prev + 1}</td>
            <td>{item.type}</td>
            <td>
              {item.name && item.category
                ? item.name + " (" + item.category + ")"
                : item.brand_name + " " + item.strength}
            </td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>

            <td>{item.quantity * item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
