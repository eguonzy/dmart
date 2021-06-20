import React from "react";
import NotificationBubble from "./components/NotificationBubble";

function NotificationDrawer(props) {
  const notes = [
    { flag: "#3d060a", id: "Okon & sons Pharmacy", info: "Placed an order" },
    { flag: "#726da8", id: "192.45.32.44", info: "Visited" },
    { flag: "#554005", id: "Okon Pharmacy", info: "Logged in" },
    { flag: "#045729", id: "Stanley & sons kiniko", info: "Added an Item" },
    { flag: "#726da8", id: "182.33.21.1", info: "Visited" },
    { flag: "#726da8", id: "192.32.43.9", info: "Visited" },
  ];
  return (
    <div className="drawer-parent notification">
      {notes.map(({ id, flag, info }) => (
        <NotificationBubble key={id} flag={flag} id={id} info={info} />
      ))}{" "}
    </div>
  );
}

export default NotificationDrawer;
