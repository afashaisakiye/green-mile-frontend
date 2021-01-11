import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ tests, component: Component, children, ...rest }) => {
  const component = children && !Component ? children : <Component {...rest} />;
  if (tests) {
    const first_false = tests.filter((test) => test.test == false)[0];
    if (first_false) {
      if (first_false.redirect != undefined) {
        return (
          <Route
            {...rest}
            render={(props) => (
              <Redirect
                to={{
                  pathname: first_false.redirect,
                  state: { from: props.location },
                }}
              />
            )}
          />
        );
      } else if (first_false.component) {
        return <first_false.component />;
      }
    }
  }

  return <Route {...rest} render={(props) => component} />;
};

export default PrivateRoute;
