import React from "react";
import { Route } from "react-router-dom";
import "../../res/css modules/admin.scss";
import AdminHome from "./AdminHome";
import AdminMerchantAccount from "./admin merchant/admin merchant options/AdminMerchantAccount";
import AdminMerchants from "./admin merchant/AdminMerchants";
import DrawerMenu from "./Drawers/left_drawer/DrawerMenu";
import NavBar from "./components/NavBar";
import NotificationDrawer from "./Drawers/Notification_drawer/NotificationDrawer";
function AdminLanding(props) {
  const routes = [
    { path: "/admin", Component: AdminHome },
    { path: "/admin/merchants", Component: AdminMerchants },
    { path: "/admin/merchants_account", Component: AdminMerchantAccount },
  ];
  return (
    <div className="admin-parent">
      <NavBar {...props} />
      <DrawerMenu {...props} />
      <NotificationDrawer {...props} />
      <div className="views">
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} exact component={Component} />
        ))}
      </div>
    </div>
  );
}

export default AdminLanding;
