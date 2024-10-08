import React from "react";
import { Navigate } from "react-router-dom";
import { roles } from "../utils/constant";

const Protected = ({
  userRole,
  isValidAuthRoleForAdmin,
  isRestricted,
  children,
}) => {
  const user = localStorage.getItem("authToken");

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  // If user type not an admin then route is restricted
  if (
    isRestricted &&
    (userRole === roles.admin || userRole === roles.user) !==
      isValidAuthRoleForAdmin
  ) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};
export default Protected;
