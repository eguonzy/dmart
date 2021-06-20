import React from "react";

function Table({ paged, onClick, prev }) {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Wishlist</th>
          <th>Orders</th>
          <th>Reviews & Rating</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {paged.map((customer, index) => (
          <tr
            onClick={() => onClick(customer.name, customer.orders)}
            key={customer.name + index + customer["reviews&rating"]}
          >
            <td>{index + prev + 1}</td>
            <td>{customer.name}</td>
            <td>{customer.wishlist}</td>
            <td>{customer.orders}</td>
            <td>{customer["reviews&ratings"]} stars</td>
            <td>{customer.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
