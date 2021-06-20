import React, { useEffect, useState } from "react";
import PaginationHead from "../reusables/PaginationHead";
import PaginationPages from "../reusables/PaginationPages";
import SortBar from "../SortBar";
import Table from "./components/Table";

function AdminMerchants(props) {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageCount, setCount] = useState({ prev: 0, next: 10 });
  const { prev, next } = pageCount;
  const rawMerchants = [
    { bn: "Stanley ltd", orders: 23, items: 20, sales: 45903, rating: 5 },
    { bn: "Chuckwu ltd", orders: 2, items: 230, sales: 5903, rating: 2 },
    { bn: "Bakasi ltd", orders: 235, items: 260, sales: 4503, rating: 3 },
    { bn: "Hub ltd", orders: 3, items: 210, sales: 4903, rating: 2 },
    { bn: "Stan ltd", orders: 234, items: 204, sales: 45, rating: 5 },
    { bn: "Pakistan ltd", orders: 13, items: 220, sales: 903, rating: 1 },
    { bn: "Naija ltd", orders: 112, items: 450, sales: 15903, rating: 4 },
    { bn: "Naija ltd", orders: 112, items: 450, sales: 15903, rating: 4 },
    { bn: "Naija ltd", orders: 112, items: 450, sales: 15903, rating: 4 },
    { bn: "Naija ltd", orders: 112, items: 450, sales: 15903, rating: 4 },
    { bn: "Cameroon ltd", orders: 623, items: 620, sales: 645903, rating: 5 },
    { bn: "Gambia ltd", orders: 243, items: 240, sales: 459043, rating: 4 },
    { bn: "Senegal ltd", orders: 123, items: 120, sales: 145903, rating: 5 },
    { bn: "Senegal ltd", orders: 123, items: 120, sales: 145903, rating: 5 },
    { bn: "Senegal ltd", orders: 123, items: 120, sales: 145903, rating: 5 },
    { bn: "Senegal ltd", orders: 123, items: 120, sales: 145903, rating: 5 },
    { bn: "Senegal ltd", orders: 123, items: 120, sales: 145903, rating: 5 },
    { bn: "Ghana ltd", orders: 231, items: 201, sales: 459031, rating: 1 },
    {
      bn: "South Africa ltd",
      orders: 823,
      items: 820,
      sales: 845903,
      rating: 5,
    },
    { bn: "Malasia ltd", orders: 238, items: 208, sales: 459038, rating: 4 },
    { bn: "Mali ltd", orders: 283, items: 280, sales: 485903, rating: 5 },
    { bn: "Cote ltd", orders: 237, items: 207, sales: 459037, rating: 2 },
    { bn: "Algeria ltd", orders: 723, items: 720, sales: 745903, rating: 5 },
    { bn: "Ethiopia ltd", orders: 273, items: 270, sales: 459037, rating: 2 },
    { bn: "Liberia ltd", orders: 623, items: 620, sales: 645903, rating: 5 },
    { bn: "Liberia ltd", orders: 623, items: 620, sales: 645903, rating: 5 },
    { bn: "Liberia ltd", orders: 623, items: 620, sales: 645903, rating: 5 },
    { bn: "Liberia ltd", orders: 623, items: 620, sales: 645903, rating: 5 },
    { bn: "Liberia ltd", orders: 623, items: 620, sales: 645903, rating: 5 },
    { bn: "Zimbabwe ltd", orders: 236, items: 206, sales: 459036, rating: 3 },
    { bn: "Zimbabwe ltd", orders: 236, items: 206, sales: 459036, rating: 3 },
    { bn: "Zimbabwe ltd", orders: 236, items: 206, sales: 459036, rating: 3 },
    { bn: "Zimbabwe ltd", orders: 236, items: 206, sales: 459036, rating: 3 },
    { bn: "Zimbabwe ltd", orders: 236, items: 206, sales: 459036, rating: 3 },
    { bn: "Zimbabwe ltd", orders: 236, items: 206, sales: 459036, rating: 3 },
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

  const handleSortMenu = (
    { target },
    key,
    reverse,
    filter,
    rawArray,
    stateArray,
    pagedArray
  ) => {
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

  const handleToMerchant = (merchant) => {
    props.history.push({
      pathname: "/admin/merchants_account",
      state: merchant,
    });
  };

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
      <Table handleToMerchant={handleToMerchant} paged={paged} prev={prev} />
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

export default AdminMerchants;
