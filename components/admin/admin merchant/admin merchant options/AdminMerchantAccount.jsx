import React, { useRef, useState } from "react";
import NewItems from "./new items/NewItems";
import ReviewsRatings from "./reviews and ratings/ReviewsRatings";
import Sales from "./sales/Sales";
import Stock from "./stock/Stock";
import MerchantDetailsCard from "./components/MerchantDetailsCard";
import UserSvg from "../../components/UserSvg";
function AdminMerchantAccount(props) {
  const [state, setState] = useState({
    isClicked: false,
    stock: false,
    orders: false,
    reviews: false,
    sales: false,
    new: false,
  });
  const [title, setTitle] = useState("");
  const handleClick = (key, title) => {
    console.log(title);
    return state.isClicked
      ? setState((prevState) => {
          let state = { ...prevState };
          state.isClicked = false;
          return state;
        })
      : setState((prevState) => {
          let state = {};
          state.isClicked = true;
          state[key] = true;
          setTitle(title);
          return state;
        });
  };
  const myRef = useRef();
  console.log();
  return (
    <div ref={myRef} className="admin-merchant-profile-con">
      <div className="admin-merchant-details-con">
        <p className="business-name">{props.history.location.state.bn}</p>
        <p className="merchant-name">His firstname and last name</p>
        <p className="merchant-name">His email</p>
        <p className="merchant-address">his address</p>
      </div>
      <div
        style={{ left: state.isClicked && "-150%" }}
        className="admin-merchant-options-con"
      >
        <MerchantDetailsCard
          onClicked={() => handleClick("new", "New Items")}
          title="New Items"
          count={200}
        />
        <MerchantDetailsCard
          onClicked={() => handleClick("stock", "Stock")}
          title="Stock"
          count={50}
        />
        <MerchantDetailsCard
          onClicked={() => handleClick("orders", "Orders")}
          title="Orders"
          count={10}
        />
        <MerchantDetailsCard
          onClicked={() => handleClick("reviews", "Reviews & Ratings")}
          title="Reviews & Ratings"
          count={10}
        />
        <MerchantDetailsCard
          onClicked={() => handleClick("sales", "Sales")}
          title="Sales"
          count={"\u20A6100k"}
        />
        <MerchantDetailsCard
          onClicked={() => handleClick("new", "Wish List")}
          title="Wish List"
          count={200}
        />
      </div>
      <div
        style={{ right: state.isClicked ? "0%" : "-150%" }}
        className="chosen-vehicle"
      >
        <p className="option-title">{title}</p>
        <div title="Back" onClick={handleClick} className="admin-back">
          {" "}
          <UserSvg caret={true} />
        </div>{" "}
        {state.new && <NewItems />}
        {state.stock && <Stock />}
        {state.sales && <Sales />}
        {state.reviews && <ReviewsRatings />}
        {state.followers && <NewItems />}
      </div>
    </div>
  );
}

export default AdminMerchantAccount;
