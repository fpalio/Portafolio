import React from "react";
import { Link } from "react-router-dom";
const Dropdown = ({ isOpened, toggle }) => {
  return (
    <div
      className={
        isOpened ? "grid grid-row-4 bg-gray-300 text-center" : "hidden"
      }
    >
      <Link
        className="p-4 rounded-md hover:shadow hover:bg-gray-100 hover:text-gray-500 active:text-black active:bg-gray-200"
        to="/"
        onClick={toggle}
      >
        Home
      </Link>
      <Link
        className="p-4 rounded-md hover:shadow hover:bg-gray-100 hover:text-gray-500 active:text-black active:bg-gray-200 "
        to="/about"
        onClick={toggle}
      >
        About Me
      </Link>
      <Link
        className="p-4 rounded-md hover:shadow hover:bg-gray-100 hover:text-gray-500 active:text-black active:bg-gray-200"
        to="/projects"
        onClick={toggle}
      >
        Projects
      </Link>
      <Link
        className="p-4 rounded-md hover:shadow hover:bg-gray-100 hover:text-gray-500 active:text-black active:bg-gray-200"
        to="/resume"
        onClick={toggle}
      >
        Resume
      </Link>
    </div>
  );
};
export default Dropdown;
