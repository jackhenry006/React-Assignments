import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white cursor-pointer">Logio</h1>

        <div className="hidden md:flex gap-8 text-white font-medium">
          <p className="cursor-pointer hover:text-indigo-200 transition">
            Home
          </p>
          <p className="cursor-pointer hover:text-indigo-200 transition">
            About
          </p>
          <p className="cursor-pointer hover:text-indigo-200 transition">
            Contact
          </p>
        </div>

        <button
          onClick={() => setToggle((prev) => !prev)}
          className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-lg hover:bg-indigo-100 transition"
        >
          Create User
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
