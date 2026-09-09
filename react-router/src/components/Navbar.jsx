import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center mb-4">
        <h1>logo</h1>
        <div className="flex items-center gap-10 justify-between">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
        <button>login</button>
      </nav>
    </div>
  );
};

export default Navbar;
