import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">Sky Drt</h1>

      {/* Navigation */}
      <div className="flex items-center gap-3">
        <NavLink
          to="/main"
          className="px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-600 hover:text-white transition"
        >
          Home
        </NavLink>

        <NavLink
          to="/main/shop"
          className="px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-600 hover:text-white transition"
        >
          Shop
        </NavLink>

        <NavLink
          to="/main/about"
          className="px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-600 hover:text-white transition"
        >
          About
        </NavLink>
      </div>

      {/* User + Cart + Logout */}
      <div className="flex items-center gap-5">
        <div>
          <h1 className="font-semibold text-gray-800">Hey Dev 👋</h1>
          <p className="text-xs text-gray-500">Welcome back</p>
        </div>

        {/* Cart */}
        <button className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition">
          🛒 Cart
        </button>

        {/* Logout Icon */}
        <button
          className="w-10 h-10 flex items-center justify-center rounded-lg text-red-500 hover:bg-red-50 hover:text-red-600 transition text-xl"
          title="Logout"
        >
          ⏻
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
