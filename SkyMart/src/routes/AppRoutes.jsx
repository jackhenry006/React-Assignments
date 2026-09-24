import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import AuthLayouts from "../layouts/AuthLayouts";
import MainLayouts from "../layouts/MainLayouts";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import ProductPage from "../pages/ProductPage";

import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoute from "./PublicRoute";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          element: <AuthLayouts />,
          children: [
            {
              index: true,
              element: <LoginPage />,
            },
            {
              path: "login",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },

    {
      path: "/main",
      element: <ProtectedRoutes />,
      children: [
        {
          element: <MainLayouts />,
          children: [
            {
              index: true,
              element: <HomePage />,
            },
            {
              path: "users",
              element: <UserPage />,
            },
            {
              path: "products",
              element: <ProductPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
