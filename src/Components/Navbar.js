import React from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className=" flex justify-between items-center h-16 text-black relative shadow-md my-2"
      role="navigation"
    >
      <Link to="/" className="pl-8 mb-2">
        <Logo />
      </Link>
      <div
        className="px-4  py-4 cursor-pointer rounded-full md:hidden active:bg-gray-300 active:animate-ping"
        onClick={toggle}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <div className=" pr-8 md:block hidden m-0">
        <Link
          className="p-4 rounded-md hover:shadow hover:bg-gray-100 hover:text-gray-500 active:text-black active:bg-gray-200"
          to="/"
        >
          Home
        </Link>
        <Link
          className="p-4 rounded-md hover:shadow hover:bg-gray-100 hover:text-gray-500 active:text-black active:bg-gray-200 "
          to="/about"
        >
          About Me
        </Link>
        <Link
          className="p-4 rounded-md hover:shadow hover:bg-gray-100 hover:text-gray-500 active:text-black active:bg-gray-200"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className="p-4 rounded-md hover:shadow hover:bg-gray-100 hover:text-gray-500 active:text-black active:bg-gray-200"
          to="/resume"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
