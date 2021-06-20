import React from "react";
import moment from "moment";

const AdminMerchantOrdersTable = ({ paged, prev, handleClick }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Order #</th>
          <th>Items</th>
          <th>Fulfilled</th>
          <th>Unfifilled</th>
          <th>Date Ordered</th>
          <th>Date Returned</th>
        </tr>
      </thead>
      <tbody>
        {paged.map(
          ({ date_ordered, date_returned, order_number, orders }, index) => (
            <tr
              onClick={(e) => handleClick(e, order_number, orders)}
              key={index}
            >
              <td>{index + prev + 1}</td>
              <td>{order_number}</td>
              <td>{orders.length}</td>
              <td style={{ color: "green" }}>
                {" "}
                {orders.filter(({ status }) => status).length}
              </td>
              <td style={{ color: "red" }}>
                {" "}
                {orders.filter(({ status }) => !status).length}
              </td>
              <td> {moment(Date.now()).format("MMM Do YY")}</td>
              <td> God forbid</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default AdminMerchantOrdersTable;
