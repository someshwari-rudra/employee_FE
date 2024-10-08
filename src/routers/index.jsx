import React from "react";
import { Route, Routes } from "react-router-dom";
import { roles } from "../utils/constant";
import { routes } from "../description/router.description";
import Protected from "./protected";

const renderRoutes = (routes, role, user) => {
  console.log("user asdasda ", user);
  return routes.map(
    ({ subRoutes, element, isProtected, isRestricted, ...route }, index) => (
      <Route
        {...route}
        element={
          isProtected ? (
            <Protected
              userRole={role}
              user={user}
              isRestricted={isRestricted}
              {...route}
            >
              {element}
            </Protected>
          ) : (
            element
          )
        }
        key={index}
      >
        {subRoutes && renderRoutes(subRoutes, role, user)}
      </Route>
    )
  );
};

const role = roles?.user;

const Routers = () => {
  return <Routes>{renderRoutes(routes, role)}</Routes>;
};
export default Routers;
