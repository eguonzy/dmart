import React, { useState } from "react";
import Table from "./components/Table";
import { wishList } from "../../../../../model/newItems";
import PaginationHead from "../../../reusables/PaginationHead";
import PaginationPages from "../../../reusables/PaginationPages";
import Customers from "./components/Customers";

const Wishlist = (props) => {
  const [merchants, setMerchants] = useState([]);
  const [paged, setPaged] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [item, setItem] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageCount, setCount] = useState({
    prev: 0,
    next: 10,
  });
  const [customers, setCustomers] = useState([]);
  const { prev, next } = pageCount;

  React.useEffect(() => {
    setMerchants(wishList);
    setPaged(wishList.slice(0, 10));
  }, []);

  const handleShowCustomers = (e, customers) => {
    if (isVisible) {
      setIsVisible(false);
      return;
    }
    setCustomers(customers);
    setIsVisible(true);
    e.stopPropagation();
  };

  return (
    <>
      <Customers customers={customers} isVisible={isVisible} />
      <PaginationHead
        array={merchants}
        next={next}
        prev={prev}
        setPageIndex={setPageIndex}
        setPaged={setPaged}
        setCount={setCount}
      />
      <Table
        handleShowCustomers={handleShowCustomers}
        prev={prev}
        paged={paged}
      />
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

export default Wishlist;
