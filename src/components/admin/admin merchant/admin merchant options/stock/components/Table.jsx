import React from "react";
import UserSvg from "../../../../components/UserSvg";

function Table({ paged, prev, handleSort, handleItem }) {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>
            <div onClick={() => handleSort("type")} className="table-head">
              Type <UserSvg sort={true} />
            </div>
          </th>
          <th>
            {" "}
            <div onClick={() => handleSort("name")} className="table-head">
              Name <UserSvg sort={true} />
            </div>
          </th>

          <th>
            {" "}
            <div onClick={() => handleSort("quantity")} className="table-head">
              Quantity <UserSvg sort={true} />
            </div>
          </th>
          <th>
            {" "}
            <div onClick={() => handleSort("price")} className="table-head">
              <p title="Unit Price">UP(&#8358;)</p>
              <UserSvg sort={true} />
            </div>
          </th>
          <th>
            {" "}
            <div onClick={() => handleSort("bp")} className="table-head">
              <p title="Bulk Price">BP(&#8358;)</p>
              <UserSvg sort={true} />
            </div>
          </th>
          <th>
            {" "}
            <div onClick={() => handleSort("as")} className="table-head">
              <p title="Amount Sold">AS</p>
              <UserSvg sort={true} />
            </div>
          </th>
          <th>
            <div onClick={() => handleSort("ts")} className="table-head">
              <p title="Total Sales">TS</p>
              <UserSvg sort={true} />
            </div>
          </th>
          <th>
            <div onClick={() => handleSort("status")} className="table-head">
              <p title="Status">Status</p>
              <UserSvg sort={true} />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {paged.map((item, i) => (
          <tr key={i + item.quantity} onClick={(e) => handleItem(e, item)}>
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
