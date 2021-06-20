import React, { useState } from "react";
import { orders as ordersList } from "../../../../../model/newItems";
import UserSvg from "../../../components/UserSvg";
import PaginationHead from "../../../reusables/PaginationHead";
import PaginationPages from "../../../reusables/PaginationPages";
import AdminMerchantOrdersTable from "./components/AdminMerchantOrdersTable";

const Orders = (props) => {
  const [orders, setOrders] = useState([]);
  const [paged, setPaged] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [, setItem] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageCount, setCount] = useState({
    prev: 0,
    next: 10,
  });
  const [header, setHeader] = useState("");
  const [orderDetails, setOrderDetails] = useState([{}]);
  const { prev, next } = pageCount;

  React.useEffect(() => {
    setOrders(ordersList);
    setPaged(ordersList.slice(0, 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShowOrders = (e, title, orders) => {
    setIsVisible(true);
    setHeader(title);
    setOrderDetails(orders);
  };
  const handleCloseDialog = () => setIsVisible(false);

  return (
    <>
      <div
        style={{
          transform: isVisible ? "rotateX(0deg)" : "rotateX(90deg)",
        }}
        className="edit-con wishlist"
      >
        <div className="admin-order-title">
          <h2>Order# {header}</h2>

          <div onClick={handleCloseDialog} className="close_dialog">
            {/*@ts-ignore  */}
            <UserSvg close={true} onClick={() => alert("")} />{" "}
          </div>

          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails.map(
                //@ts-ignore
                ({ buyer, name, price, quantity, status }, index) => {
                  return (
                    <tr
                      style={{
                        backgroundColor: !status ? "red" : "",
                        color: !status ? "#fff" : "",
                      }}
                      key={name + index + buyer}
                    >
                      <td>{index + 1}</td>
                      <td>{buyer}</td>
                      <td>{name}</td>
                      <td>{quantity}</td>
                      <td>{price}</td>
                      <td>{status ? "Delevered" : "Failed"}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
      <PaginationHead
        array={orders}
        next={next}
        prev={prev}
        setPageIndex={setPageIndex}
        setPaged={setPaged}
        setCount={setCount}
      />
      <AdminMerchantOrdersTable
        handleClick={handleShowOrders}
        paged={paged}
        prev={prev}
      />

      <PaginationPages
        array={orders}
        next={next}
        prev={prev}
        setCount={setCount}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        setPaged={setPaged}
      />
    </>
  );
};

export default Orders;
