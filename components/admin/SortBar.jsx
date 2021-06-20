import React from "react";
import SortBubble from "./SortBubble";
import UserSvg from "./components/UserSvg";

function SortBar({ onSort, menu, handleSearch }) {
  return (
    <div className="sort-bar">
      <div className="admin-merchant-search-con">
        <input onChange={handleSearch} type="search" />{" "}
        <UserSvg search={true} />
      </div>
      <SortBubble
        isOptions={menu[0]}
        onClick={onSort}
        title="Alpha"
        code={0}
        options={[
          { option: "A -> Z", key: "bn" },
          { option: "Z -> A", key: "bn", reverse: true },
        ]}
      />
      <SortBubble
        isOptions={menu[1]}
        title="Items"
        onClick={onSort}
        code={1}
        options={[
          { option: "High -> Low", key: "items", reverse: true },
          { option: "Low -> High", key: "items" },
        ]}
      />
      <SortBubble
        isOptions={menu[2]}
        title="Rating"
        code={2}
        onClick={onSort}
        options={[
          { option: "5 stars", key: 5, filter: 5 },
          { option: "4 stars", key: 4, filter: 4 },
          { option: "3 stars", key: 3, filter: 3 },
          { option: "2 stars", key: 2, filter: 2 },
          { option: "1 stars", key: 1, filter: 1 },
          { option: "5 -> 0", key: "rating", reverse: true },
          { option: "0 -> 5", key: "rating" },
        ]}
      />
      <SortBubble
        isOptions={menu[3]}
        code={3}
        onClick={onSort}
        title="Sales"
        options={[
          { option: "High -> Low", key: "sales", reverse: true },
          { option: "Low -> High", key: "sales" },
        ]}
      />
    </div>
  );
}

export default SortBar;
