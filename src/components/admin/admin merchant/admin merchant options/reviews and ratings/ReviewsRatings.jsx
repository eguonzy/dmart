import React, { useState } from "react";
import {
  reviews,
  Reviews as reviewsInterface,
} from "../../../../../model/newItems";
import PaginationHead from "../../../reusables/PaginationHead";
import PaginationPages from "../../../reusables/PaginationPages";
import CustomerReviews from "./components/CustomerReviews";
import Table from "./components/Table";

const Reviews = (props) => {
  const [merchants, setMerchants] = useState([]);
  const [paged, setPaged] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageCount, setCount] = useState({
    prev: 0,
    next: 10,
  });
  const { prev, next } = pageCount;
  const [customerReviews, setCustomerReviews] = useState({
    name: "",
    "reviews&ratings": [],
  });

  React.useEffect(() => {
    setMerchants(reviews);
    setPaged(reviews.slice(0, 10));
  }, []);

  const handleShowRatings = (e, customers, count) => {
    if (!isVisible) {
      setCustomerReviews(customers);
      setIsVisible(true);
    }
  };

  const handleCloseReviews = () => setIsVisible(false);
  return (
    <>
      <CustomerReviews
        handleClose={handleCloseReviews}
        isVisible={isVisible}
        reviews={customerReviews}
      />
      <PaginationHead
        array={merchants}
        next={next}
        prev={prev}
        setPageIndex={setPageIndex}
        setPaged={setPaged}
        setCount={setCount}
      />
      <Table prev={prev} paged={paged} handleClick={handleShowRatings} />
      <PaginationPages
        array={merchants}
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

export default Reviews;
