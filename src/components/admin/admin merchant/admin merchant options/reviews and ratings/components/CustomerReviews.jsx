import React from "react";
import { Reviews } from "../../../../../../model/newItems";
import UserSvg from "../../../../components/UserSvg";
import moment from "moment";
import Stars from "./Stars";

const CustomerReviews = ({ isVisible, reviews, handleClose }) => {
  const handleClick = (event) => ({ currentTarget }) => {
    const review = currentTarget.querySelector(".single-review");
    const reviewCon = currentTarget.querySelector(".single-review-con");
    //@ts-ignore
    console.log(reviewCon.style.height);
    //@ts-ignore
    reviewCon.style.height === "0px" || reviewCon.style.height === ""
      ? //@ts-ignore
        (reviewCon.style.height = review.offsetHeight + "px")
      : //@ts-ignore
        (reviewCon.style.height = "0px");
  };

  return (
    <div
      style={{
        transform: isVisible ? "rotateX(0deg)" : "rotateX(90deg)",
      }}
      className="edit-con wishlist"
    >
      <div className="customer-review">
        <div className="customer-review-header">
          <h3>
            {reviews.name} <Stars count={5} />
          </h3>

          <div onClick={handleClose} className="close">
            {/**@ts-ignore */}
            <UserSvg close={true} />
          </div>
        </div>{" "}
        {reviews["reviews&ratings"].map(
          ({ customer, rating, review }, index) => (
            <div
              style={{
                cursor: review && "pointer",
              }}
              key={index + customer}
              className="reviews-con"
              onClick={review ? handleClick : () => null}
            >
              <div className="review-data">
                <div className="customer-info">
                  <p>{customer}</p>
                  <Stars count={rating} />
                  {review && <p className="view-review">view review</p>}
                </div>

                <p className="customer-date">
                  {moment(Date.now()).format("MMM Do 21")}
                </p>
              </div>
              <div className="single-review-con">
                <p className="single-review">{review}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CustomerReviews;
