import React from "react";
import "../../res/css modules/list_page.scss";
import testImg from "../../res/images/ph1.svg";
const ItemsList = (props) => {
  const { state: categoryList } = props.history.location;
  return (
    <div className="item_list_parent">
      <div className="item__category__list__con">
        {categoryList.map((category, index) => {
          return <p key={index + category + category[1]}>{category}</p>;
        })}
      </div>
      <div className="item__category__item__list__con">
        <div className="item__category__item__card">
          <img src={testImg} alt="Drug" />
          <div className="label__con">
            <p className="label__con__title"> Mycoten</p>
            <p>Clotrimazole</p>
            <p>
              {" "}
              <span>Form</span> <span>Sryup</span>
            </p>
            <p>
              {" "}
              <span>Str</span> <span>30mg</span>
            </p>
            <p>
              {" "}
              <span>Packsize</span> <span>x30</span>
            </p>

            <p className="label__con__price">&#8358;5000</p>
          </div>
          <div className="add_to_cart">
            <span>Add</span> <i className="fa fa-cart-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
