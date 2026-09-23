import React from "react";
import { Outlet } from "react-router";

const MainLayouts = () => {
  return (
    <div>
      <h1>Main layout</h1>
      <Outlet />
    </div>
  );
};

export default MainLayouts;
