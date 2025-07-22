// components/AuthRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/auth" replace />;
};

export default AuthRoute;
