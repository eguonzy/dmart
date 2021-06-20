import React, { useEffect, useState } from "react";
import { newItems } from "../../../../../model/newItems";
import PaginationHead from "../../../reusables/PaginationHead";
import PaginationPages from "../../../reusables/PaginationPages";
import Table from "./components/Table";

function Stock() {
  const [merchants, setMerchants] = useState([]);
  const [paged, setPaged] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageCount, setCount] = useState({ prev: 0, next: 10 });
  const [isSorted, setIsSorted] = useState(false);
  const { prev, next } = pageCount;

  useEffect(() => {
    setMerchants(newItems);
    setPaged(newItems.slice(0, 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSort = (key) => {
    if (key === "name" || key === "brand_name" || key === "type") {
      const sorted = newItems.sort(({ [key]: a }, { [key]: b }) =>
        a > b ? 1 : a < b ? -1 : 0
      );
      console.log(sorted === merchants);
      if (!isSorted) {
        setMerchants(sorted);
        setPaged(sorted.slice(prev, next));
        setIsSorted(true);
        return;
      }
      setMerchants(sorted.reverse());
      setPaged(sorted.slice(prev, next).reverse());
      setIsSorted(false);
    }
  };
  const handleItem = () => {
    newItems.sort();
  };
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

      <Table
        paged={paged}
        handleSort={handleSort}
        handleItem={handleItem}
        prev={prev}
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
}

export default Stock;
