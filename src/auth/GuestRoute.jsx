// components/GuestRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const GuestRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  return !user ? children : <Navigate to="/" replace />;
};

export default GuestRoute;
