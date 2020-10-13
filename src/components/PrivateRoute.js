import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userLog = useSelector((state) => state.user.logUser);
  return (
    <Route
      {...rest}
      render={(props) =>
        userLog !== null ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
