import React, { useEffect, useState } from "react";
import { createRipple } from "../../../../../controller/ripple";
import { newItems } from "../../../../../model/newItems";
import PaginationHead from "../../../reusables/PaginationHead";
import PaginationPages from "../../../reusables/PaginationPages";
import EditItem from "./components/EditItem";
import Table from "./components/Table";

function NewItems(props) {
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

  const handleEdit = (e, item) => {
    if (!labels.length > 0) {
      setLabels(Object.keys(item));
      setItem(item);
      e.stopPropagation();
    }
  };
  var closeEdit = () => {
    setLabels([]);
    setItem({});
  };
  window.onclick = (e) => {
    !e.target.closest(".edit-con") && closeEdit();
  };
  const handleSubmit = (e) => {
    createRipple(e);
    e.preventDefault();
    e.stopPropagation();
    setTimeout(() => {
      closeEdit();
    }, 1000);
  };
  return (
    <>
      <EditItem
        labels={labels}
        onSubmit={handleSubmit}
        item={item}
        isEdit={labels.length > 0}
      />

      <PaginationHead
        array={merchants}
        next={next}
        prev={prev}
        setPageIndex={setPageIndex}
        setPaged={setPaged}
        setCount={setCount}
      />
      <Table paged={paged} prev={prev} handleEdit={handleEdit} />

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

export default NewItems;
