import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-black shadow-lg">
      <div className="mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center justify-center">
            <a
              href="/home"
              className="flex items-center py-5 px-2 text-white hover:text-gray-100"
            >
              <span className="font-semibold text-lg">Eco Spark</span>
            </a>
          </div>
          <div className="flex space-x-4">
            <NavLink
              to=""
              className="flex items-center py-5 px-2 text-white hover:text-gray-100"
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/findroute"
              className="flex items-center py-5 px-2 text-white hover:text-gray-100"
            >
              <span>Find Route</span>
            </NavLink>
            <NavLink
              to="/App"
              className="flex items-center py-5 px-2 text-white hover:text-gray-100"
            >
              <span>Shop</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
