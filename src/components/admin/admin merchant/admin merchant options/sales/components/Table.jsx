import React from "react";
import { ISales } from "../../../../../../model/newItems";

const Table = ({ paged, prev }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Order #</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price (&#8358;)</th>
          <th>Buyer</th>
          <th title="Date of Purchase">DOP</th>
        </tr>
      </thead>
      <tbody>
        {paged.map(
          (
            { buyer, date, name, order_number, quantity, unit_price },
            index
          ) => (
            <tr tabIndex={0} key={index + order_number}>
              <td>{index + prev + 1}</td>
              <td>{order_number + index}</td>
              <td>{name}</td>
              <td> {quantity} </td>
              <td>{quantity * unit_price}</td>
              <td>{buyer}</td>
              <td>{date}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default Table;
