import React from "react";
import { RouterProvider } from "react-router/dom";
import AuthLayouts from "../layouts/AuthLayouts";
import { createBrowserRouter } from "react-router";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayouts from "../layouts/MainLayouts";
const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
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

    {
      path: "/main",
      element: <MainLayouts />,
      children: [{}],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
