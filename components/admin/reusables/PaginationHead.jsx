import React from "react";

function PaginationHead({
  prev,
  array,
  next,
  setPageIndex,
  setPaged,
  setCount,
}) {
  const handleNext = async (number) => {
    if (next < array.length) {
      let count = { prev, next };
      setPageIndex((prevState) => (prevState += 1));
      setCount((prevState) => {
        let state = { ...prevState };
        state.next += 10;
        state.prev += 10;
        return state;
      });
      count.next += 10;
      count.prev += 10;
      let paged = await array.slice(count.prev, count.next);
      await setPaged(paged);
    }
  };
  const handleBack = async (number) => {
    if (prev > 0) {
      let count = { prev, next };
      setPageIndex((prevState) => (prevState -= 1));
      setCount((prevState) => {
        let state = { ...prevState };
        state.next -= 10;
        state.prev -= 10;
        return state;
      });
      count.next -= 10;
      count.prev -= 10;
      let paged = await array.slice(count.prev, count.next);
      await setPaged(paged);
    }
  };
  return (
    <div className="table-header-con">
      {prev > 0 && (
        <button className="back-btn" onClick={handleBack}>
          Back
        </button>
      )}
      <p>
        {prev + 1} to {next > array.length ? array.length : next} of{" "}
        {array.length}
      </p>{" "}
      {next < array.length && (
        <button className="next-btn" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );
}

export default PaginationHead;
