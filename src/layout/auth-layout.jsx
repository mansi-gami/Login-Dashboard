import React from "react";
import Header from "../component/header";
import { Navigate, useLocation } from "react-router-dom";
import { route } from "../routes/RoutePath";
import MainLayout from "./main-layout";

const AuthLayout = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const redirect = location?.pathname !== "/" ? location?.pathname : route.home;
  if (token) return <Navigate to={redirect} replace />;

  return <div>{children}</div>;
};

export default AuthLayout;
