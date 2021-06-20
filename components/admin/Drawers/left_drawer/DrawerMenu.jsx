import React from "react";

import DrawerOption from "./components/DrawerOption";
function DrawerMenu({ history }) {
  const handleMenuOptions = (e, key) => {
    let list = document.getElementsByClassName("menu-active");
    for (const i of list) i.classList.remove("menu-active");
    e.currentTarget.classList.add("menu-active");
    history.push("/admin/" + key);
  };
  return (
    <div className="drawer-parent">
      <DrawerOption
        onClick={(e) => handleMenuOptions(e, "")}
        dashboard="dashboard"
        title="Dashboard"
        active={true}
      />
      <DrawerOption
        onClick={(e) => handleMenuOptions(e, "merchants")}
        title="Merchants"
        arrow={true}
      />
      <DrawerOption
        onClick={(e) => handleMenuOptions(e, "customers")}
        title="Customers"
        arrow={true}
      />
      <DrawerOption
        onClick={(e) => handleMenuOptions(e, "orders")}
        title="Orders"
        arrow={true}
      />
    </div>
  );
}

export default DrawerMenu;
