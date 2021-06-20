import React from "react";
import UserSvg from "./components/UserSvg";

function SortBubble({ title, options, onClick, code, isOptions }) {
  return (
    <div onClick={() => onClick.handleShowMenu(code)} className="sort-bubble">
      <p>{title}</p>{" "}
      <UserSvg
        onClick={() => onClick.handleShowMenu(code)}
        isOptions={isOptions}
        caret={true}
      />
      <div style={{ display: isOptions && "block" }} className="sort-options">
        {options.map(({ option, key, reverse, filter }, index) => (
          <p
            tabIndex={0}
            key={option + index}
            onClick={(e) => onClick.handleSortMenu(e, key, reverse, filter)}
            className="sort-option"
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SortBubble;
