import React from "react";

function NotificationSvg({ stroke, label, last, active }) {
  const handleSortNotification = ({ currentTarget }) => {
    let list = document.getElementsByClassName("active-notification");
    for (const i of list) {
      i.classList.remove("active-notification");
    }
    currentTarget.classList.add("active-notification");
  };
  return (
    <div className="notification-con">
      <div className="notification-badge">
        <p>10</p>
      </div>
      <svg
        onClick={handleSortNotification}
        version="1.1"
        id="Icons"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 32 32"
        style={{
          enableBackground: "new 0 0 30 30",
          height: 30,
          width: 30,
          stroke,
          strokeWidth: 3,
          fillOpacity: 0,
        }}
      >
        <path
          d="M26,21.5L25,20c-1.6-2.4-2.4-5.3-2.4-8.2c0-3.1-2-5.7-4.7-6.5C17.6,4.5,16.8,4,16,4s-1.6,0.5-1.9,1.3
	c-2.7,0.8-4.7,3.4-4.7,6.5c0,2.9-0.8,5.8-2.4,8.2l-1,1.5c-0.4,0.7,0,1.5,0.8,1.5h18.3C25.9,23,26.4,22.1,26,21.5z"
        />
        <path d="M19,26c0,1.7-1.3,3-3,3s-3-1.3-3-3" />
      </svg>
      <p className={last}>{label}</p>
    </div>
  );
}

export default NotificationSvg;
