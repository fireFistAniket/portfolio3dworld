import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between fixed top-8 left-1/2 -translate-x-1/2 bg-transparent border border-slate-400 z-10 px-4 rounded-lg sm:gap-48 gap-12">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "from-blue-300 via-blue-600 to-blue-900 bg-clip-text text-transparent bg-gradient-to-r font-bold sm:text-2xl"
            : "text-lime-800 font-bold sm:text-2xl"
        }
      >
        AS
      </NavLink>
      <ul className="flex items-center gap-4">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "from-blue-300 via-blue-600 to-blue-900 bg-clip-text text-transparent bg-gradient-to-r font-bold sm:text-2xl capitalize"
              : "text-lime-800 font-bold sm:text-2xl capitalize"
          }
        >
          about
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "from-blue-300 via-blue-600 to-blue-900 bg-clip-text text-transparent bg-gradient-to-r font-bold sm:text-2xl capitalize"
              : "text-lime-800 font-bold sm:text-2xl capitalize"
          }
        >
          projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "from-blue-300 via-blue-600 to-blue-900 bg-clip-text text-transparent bg-gradient-to-r font-bold sm:text-2xl capitalize"
              : "text-lime-800 font-bold sm:text-2xl capitalize"
          }
        >
          contact
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
