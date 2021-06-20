import React from "react";

function Table({ paged, handleToMerchant, prev }) {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Buisness Name</th>
          <th>Items</th>
          <th>Orders</th>
          <th>Rating</th>
          <th>Sales (&#8358;)</th>
        </tr>
      </thead>
      <tbody>
        {paged.map(({ bn, orders, items, rating, sales }, index) => (
          <tr
            onClick={() =>
              handleToMerchant({ bn, orders, items, rating, sales })
            }
            key={bn + index + rating}
          >
            <td>{index + prev + 1}</td>
            <td>{bn}</td>
            <td>{items}</td>
            <td>{orders}</td>
            <td>{rating} stars</td>
            <td>{sales}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
