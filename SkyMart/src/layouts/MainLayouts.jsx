import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayouts = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 p-2">
      <div className="grid min-h-[calc(100vh-1rem)] grid-cols-1 md:grid-cols-[220px_1fr] overflow-hidden rounded-xl bg-white shadow-sm">
        {/* Sidebar */}
        <Navbar />

        {/* Main Content */}
        <main className="min-w-0 overflow-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayouts;
