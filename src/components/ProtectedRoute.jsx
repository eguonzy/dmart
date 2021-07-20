import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";

function ProtectedRoute({ children: Children, ...rest }) {
  const { isAuthorized } = useSelector((state) => state.user);
  useEffect(() => {}, []);

  return (
    <Route
      {...rest}
      exact={false}
      render={({ location, history }) => {
        return isAuthorized === true ? (
          <Children history={history} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default ProtectedRoute;
