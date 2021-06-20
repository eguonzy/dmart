import React from "react";

function DrawerOption({ history, arrow, title, dashboard, onClick, active }) {
  return (
    <div
      onClick={onClick}
      className={"menu-option-con " + (active && "menu-active")}
    >
      {dashboard && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: 15, width: 15 }}
          viewBox="0 0 24 24"
        >
          <defs></defs>
          <title>gauge-dashboard-1</title>
          <circle className="a" cx="12" cy="12" r="11.5" />
          <path
            className="b"
            d="M13.414,13.414a2,2,0,0,1-2.828-2.828c.781-.781,8.132-5.3,8.132-5.3S14.2,12.633,13.414,13.414Z"
          />
          <line className="a" x1="3.5" y1="12" x2="5" y2="12" />
          <line className="a" x1="5.99" y1="5.99" x2="7.05" y2="7.05" />
          <line className="a" x1="12" y1="3.5" x2="12" y2="5" />
          <line className="a" x1="20.5" y1="12" x2="19" y2="12" />
          <path
            className="a"
            d="M20.633,19.6A14.708,14.708,0,0,0,12,17a14.708,14.708,0,0,0-8.633,2.6"
          />
        </svg>
      )}{" "}
      <p className={dashboard}>{title}</p>
      <div className="icon">
        {arrow && (
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 129 129"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            enableBackground="new 0 0 129 129"
          >
            <g>
              <path
                fill=""
                d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"
              />
            </g>
          </svg>
        )}
      </div>
    </div>
  );
}

export default DrawerOption;
