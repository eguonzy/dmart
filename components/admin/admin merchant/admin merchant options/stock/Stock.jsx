import React, { useEffect, useState } from "react";
import { newItems } from "../../../../../model/newItems";
import PaginationHead from "../../../reusables/PaginationHead";
import PaginationPages from "../../../reusables/PaginationPages";
import Table from "./components/Table";

function Stock(props) {
  const [merchants, setMerchants] = useState([]);
  const [paged, setPaged] = useState([]);
  const [item, setItem] = useState([]);
  const [labels, setLabels] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageCount, setCount] = useState({ prev: 0, next: 10 });
  const { prev, next } = pageCount;

  useEffect(() => {
    setMerchants(newItems);
    setPaged(newItems.slice(0, 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <PaginationHead
        array={merchants}
        next={next}
        prev={prev}
        setPageIndex={setPageIndex}
        setPaged={setPaged}
        setCount={setCount}
      />

      <Table paged={paged} prev={prev} />
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
}

export default Stock;
