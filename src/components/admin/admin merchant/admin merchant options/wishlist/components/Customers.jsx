import React from "react";
import moment from "moment";

const Customers = ({ isVisible, customers }) => {
  return (
    <div
      style={{
        transform: isVisible ? "rotateX(0deg)" : "rotateX(90deg)",
      }}
      className="edit-con wishlist"
    >
      {customers.map(({ dateAdded, dateRemoved, name, status }, index) => (
        <p key={index} className="wishlist-customer">
          <span>{name}</span>
          <span>+{moment(Date.now()).format("MMM Do 21")}</span>
          <span>-{status && moment(Date.now()).format("MMM Do 21")}</span>
          <span
            style={{ background: status ? "green" : "red" }}
            className="wishlist-status"
          >
            {status ? "Purchased" : "Pending"}
          </span>
        </p>
      ))}
    </div>
  );
};

export default Customers;
