import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <nav className="w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="h-9 w-9 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <span className="text-white font-black text-xl">U</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            UserHub
          </span>
        </div>

        {/* Create User Button */}
        <button
          onClick={() => setToggle((prev) => !prev)}
          type="button"
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm px-4 py-2.5 rounded-lg transition-all duration-200 shadow-md shadow-indigo-600/30 hover:shadow-indigo-500/50 active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M11 5a1 1 0 10-2 0v3H6a1 1 0 000 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V5z" />
          </svg>
          <span>Create User</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
