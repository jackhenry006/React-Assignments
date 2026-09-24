import React, { useContext } from "react";
import { Navigate, NavLink } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";
const Navbar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(Auth);

  const navLinkClass = ({ isActive }) =>
    `block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-blue-600 text-white shadow-sm"
        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
    }`;

  return (
    <aside className="border-b border-gray-200 bg-white md:border-b-0 md:border-r">
      <div className="flex h-full flex-col p-4">
        {/* Logo */}
        <div className="mb-8 border-b border-gray-200 pb-4">
          <h1 className="text-xl font-bold text-gray-900">LOGO</h1>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          <NavLink to="/main" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/main/users" className={navLinkClass}>
            Users
          </NavLink>

          <NavLink to="/main/products" className={navLinkClass}>
            Products
          </NavLink>
        </nav>

        <button
          onClick={() => {
            localStorage.removeItem("loggedInUser");
            setLoggedInUser(null);
            toast.warn("User Logged Outt");
          }}
          className="mt-auto w-full rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-700 hover:shadow-md active:scale-95"
        >
          LogOut
        </button>
      </div>
    </aside>
  );
};

export default Navbar;
