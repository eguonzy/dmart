import React from "react";

function PaginationPages({
  array,
  pageIndex,
  prev,
  next,
  setPageIndex,
  setPaged,
  setCount,
}) {
  function handlePageNumber({ target }, page) {
    let count = { prev: 10 * page - 10, next: 10 * page };

    let paged = array.slice(count.prev, count.next);
    setCount((prevState) => {
      let count = { ...prevState };
      count.prev = 10 * page - 10;
      count.next = 10 * page;
      return count;
    });
    setPageIndex((prevState) => page - 1);
    setPaged(paged);
    console.log(Math.ceil(array.length / 10));
  }
  return array.length > 10 ? (
    <div className="pages-con">
      {array.map(
        (merc, index) =>
          index < Math.ceil(array.length / 10) && (
            <p
              key={index}
              onClick={(e) => handlePageNumber(e, index + 1)}
              className={index === pageIndex ? "page active-page" : "page"}
            >
              {index + 1}
            </p>
          )
      )}
    </div>
  ) : (
    <></>
  );
}

export default PaginationPages;
