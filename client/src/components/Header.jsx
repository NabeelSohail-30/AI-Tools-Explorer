/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white text-xl font-semibold">
            AI Tools Explorer
          </span>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to={"/"} className="text-white hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/About"} className="text-white hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link to={"/Contact"} className="text-white hover:text-gray-200">
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/Admin"} className="text-white hover:text-gray-200">
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
