import React from "react";

function Table({ paged, prev, onClick }) {
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
          <th>Amount Sold</th>
          <th>Total Sales</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {paged.map((item, i) => (
          <tr key={i + item.quantity} onClick={(e) => onClick(e, item)}>
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
            <td>{item.quantity - 2}</td>

            <td>{(item.quantity - 2) * item.price}</td>
            <td>Shelved</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
