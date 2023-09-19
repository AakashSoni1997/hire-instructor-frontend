import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ role }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("security_auth"));
  return isAuthenticated ? (
    <Outlet />
  ) : role === 2 ? (
    <Navigate to="/studentlogin" />
  ) : (
    <Navigate to="/instructorlogin" />
  );
};

export default PrivateRoutes;
