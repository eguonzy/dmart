import React from "react";

const Table = ({ paged, prev, handleShowCustomers }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th> <th>Name</th>
          <th>Customer (s)</th>
        </tr>
      </thead>
      <tbody>
        {paged.map((item, index) => (
          <tr
            tabIndex={0}
            onClick={(e) => handleShowCustomers(e, item.customers)}
            key={item.name + index}
          >
            <td>{index + prev + 1}</td>
            <td>{item.name}</td>
            <td>{item.customers.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
