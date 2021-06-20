import React, { useState } from "react";
import Table from "./components/Table";
import { ISales, sales as salesList } from "../../../../../model/newItems";
import PaginationHead from "../../../reusables/PaginationHead";
import PaginationPages from "../../../reusables/PaginationPages";

const Sales = (props) => {
  const [sales, setSales] = useState([]);
  const [paged, setPaged] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageCount, setCount] = useState({
    prev: 0,
    next: 10,
  });

  const { prev, next } = pageCount;

  React.useEffect(() => {
    setSales(salesList);
    setPaged(salesList.slice(0, 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <PaginationHead
        array={sales}
        next={next}
        prev={prev}
        setPageIndex={setPageIndex}
        setPaged={setPaged}
        setCount={setCount}
      />
      <Table paged={paged} prev={prev} />

      <PaginationPages
        array={sales}
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

export default Sales;
