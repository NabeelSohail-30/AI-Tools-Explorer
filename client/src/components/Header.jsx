/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="text-white body-font bg-blue-600">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-bold items-center mb-4 md:mb-0">
          <span class="ml-3 text-xl">AI Tools Explorer</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to={"/"} className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to={"/About"} className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link to={"/Contact"} className="mr-5 hover:text-gray-900">
            Contact
          </Link>
        </nav>
        <Link
          to={"/Admin"}
          class="inline-flex items-center bg-blue-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-blue-900 rounded text-base mt-4 md:mt-0"
        >
          Admin
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Header;
