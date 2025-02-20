import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { route } from "./RoutePath";
import Login from "../view/login/login";
import AuthLayout from "../layout/auth-layout";
import MainLayout from "../layout/main-layout";
import Profile from "../view/profile/profile";
import Home from "../view/home/home";
import About from "../view/about/about";
import Contact from "../view/contact/contact";

const token = localStorage.getItem("token");

const AllRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={""}
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path={route.login}
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path={route.home}
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path={route.profile}
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />
        <Route
          path={route.about}
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path={route.contact}
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoute;
