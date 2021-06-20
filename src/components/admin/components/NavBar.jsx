import React, { useState } from "react";
import NotificationSvg from "../Drawers/Notification_drawer/components/NotificationSvg";
import UserSvg from "./UserSvg";
function NavBar(props) {
  const [isOptions, setIsOptions] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const handleSHowOptions = (e) => {
    if (isOptions) {
      setIsOptions(false);
      return;
    }
    setIsOptions(true);
    e.stopPropagation();
  };
  const handleShowSearch = (show) =>
    show ? setShowSearch(false) : setShowSearch(true);

  window.onclick = () => isOptions && setIsOptions(false);
  return (
    <div className="nav-bar">
      <div className="logo left">
        <p>DrugMart</p>
      </div>
      <div className="center">
        <div className="user-con">
          <div className="icon-con">
            <UserSvg />
          </div>
          <p>John Doe</p>
          <UserSvg
            caret={true}
            isOptions={isOptions}
            onClick={handleSHowOptions}
          />
          <div
            style={{ display: isOptions && "flex" }}
            className="admin-options"
          >
            <div className="admin-option">
              <UserSvg profile={true} /> <p>Profile</p>
            </div>
            <div className="admin-option">
              <UserSvg settings={true} /> <p>Settings</p>
            </div>
            <div className="admin-option">
              <UserSvg logout={true} /> <p>Log Out</p>
            </div>
          </div>
        </div>
        <div className="admin-search">
          <div
            onClick={() => handleShowSearch(showSearch)}
            className="admin-search-icon-con"
          >
            <UserSvg largeSearch={true} />
          </div>
          <div
            style={{ width: showSearch && "15em" }}
            className="admin-search-input"
          >
            <input type="search" name="search" id="" />
          </div>
        </div>
      </div>
      <div className="logo right">
        <div className="notification-icons">
          <NotificationSvg label="New visitor" stroke="#726da8" />
          <NotificationSvg label="New Order" stroke="#a70b16" />
          <NotificationSvg label="New Login" stroke="#efcb68" />
          <NotificationSvg label="Item Added" last="last" stroke="#06b655" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
