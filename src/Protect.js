import React from "react";
import { Redirect, Route } from "react-router-dom";
//
const Protectedroute = ({ component: Component, ...rest }) => {
  const auth = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          <Component />
        ) : (
          <>
            <Redirect
              to={{
                pathname: `/login/?redirect=${location.pathname}`,
                state: { from: location },
              }}
            />
          </>
        )
      }
    />
  );
};
export default Protectedroute;
