import React from "react";
import UserSvg from "../../../components/UserSvg";

function NotificationBubble({ id, info, flag }) {
  return (
    <div style={{ background: flag }} className="notification-bubble">
      <UserSvg />
      <div className="notification-details">
        <p>{id}</p>
        <p>{info}</p>
      </div>
    </div>
  );
}

export default NotificationBubble;
