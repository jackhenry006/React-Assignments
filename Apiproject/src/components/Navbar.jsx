import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Navbar = () => {
  let { setIsCartOpen } = useContext(MyStore);
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60 shadow-lg">
      {/* Logo */}
      <div className="text-xl font-bold tracking-tight text-white cursor-pointer">
        logo<span className="text-orange-500">.</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <a
          onClick={() => {
            return setIsCartOpen(false);
          }}
          href="#home"
          className="text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-orange-500"
        >
          Home
        </a>
        <a
          onClick={() => {
            return setIsCartOpen(true);
          }}
          href="#cart"
          className="text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-orange-500"
        >
          Cart
        </a>
      </div>

      {/* Action Button */}
      <button className="rounded-full bg-orange-500 px-5 py-2 text-sm  text-black font-semibold transition-all duration-200 hover:bg-orange-400 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] active:scale-95">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
