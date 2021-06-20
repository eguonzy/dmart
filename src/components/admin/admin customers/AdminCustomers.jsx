import React, { useEffect, useState } from "react";
import PaginationHead from "../reusables/PaginationHead";
import PaginationPages from "../reusables/PaginationPages";
import SortBar from "../SortBar";
import Table from "./components/Table";

function AdminCustomers(props) {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageCount, setCount] = useState({ prev: 0, next: 10 });
  const { prev, next } = pageCount;
  const rawMerchants = [
    {
      name: "D'sanitas",
      orders: 400,
      "reviews&ratings": 40,
      total: 50392,
      wishlist: 4000,
    },
  ];
  const [merchants, setMerchants] = useState([]);
  const [paged, setPaged] = useState([]);
  const [showMenu, setShowMenu] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });
  const deFaultMenu = {
    0: false,
    1: false,
    2: false,
    3: false,
  };

  useEffect(() => {
    setMerchants(rawMerchants);
    setPaged(rawMerchants.slice(0, 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSortMenu = ({ target }, key, reverse, filter) => {
    let list = document.getElementsByClassName("sort-option");
    for (const i of list) i.classList.remove("sort-active");
    target.classList.add("sort-active");
    setShowMenu(deFaultMenu);
    if (!filter) {
      const sorted = rawMerchants.sort((a, b) =>
        a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
      );
      reverse ? setMerchants(sorted.reverse()) : setMerchants(sorted);
      setPaged(sorted.slice(prev, next));
      return;
    }
    const sorted = rawMerchants.filter(({ rating }) => rating === filter);
    setMerchants(sorted);
    setPaged(sorted.slice(prev, next));
    console.log(sorted);
    console.log(
      `%c ${sorted.reverse()}
      ${rawMerchants.sort().reverse()}`,
      "background:red"
    );
  };

  const handleSearch = async ({ target }) => {
    let query = new RegExp(target.value, "i");
    const filtered = rawMerchants.filter(({ bn }) => bn.match(query));
    await setMerchants(filtered);
    await setPaged(filtered.slice(0, 10));
  };

  const handleShowMenu = (code) => {
    let newMenu = { ...deFaultMenu, [code]: true };
    !showMenu[code] ? setShowMenu(newMenu) : setShowMenu(deFaultMenu);
  };

  const handleToCustomer = () => {};

  return (
    <div className="admin-merchant-parent">
      <SortBar
        handleSearch={handleSearch}
        menu={showMenu}
        onSort={{ handleSortMenu, handleShowMenu }}
      />

      <PaginationHead
        array={merchants}
        next={next}
        prev={prev}
        setPageIndex={setPageIndex}
        setPaged={setPaged}
        setCount={setCount}
      />
      <Table paged={paged} prev={prev} onClick={handleToCustomer} />
      <PaginationPages
        array={merchants}
        next={next}
        prev={prev}
        setCount={setCount}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        setPaged={setPaged}
      />
    </div>
  );
}

export default AdminCustomers;
