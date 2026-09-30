import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisteredPage from "../pages/RegisteredPage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import PublicProtected from "./protected/publicProtected";
import MainProtected from "./protected/mainProtected";
import ShopPage from "../pages/ShopPage";
import AboutPage from "../pages/AboutPage";

const AppRoutes = () => {
  let dispatch = useDispatch();

  const hydrateUser = () => {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      toast.error("Unauthorized user");
      return;
    }
    dispatch(addUser(loggedInUser));
  };

  useEffect(() => {
    hydrateUser();
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisteredPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "shop",
              element: <ShopPage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
