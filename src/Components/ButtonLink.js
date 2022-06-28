import React from "react";
import { Link } from "react-router-dom";
export default function ButtonLink({ text, route, customCss }) {
  const buttonClasses =
    customCss +
    "  mt-4 rounded text-white p-2 bg-blue-500 font-bold hover:bg-blue-700 hover:shadow-md ";
  return (
    <Link to={route}>
      <div className={`${buttonClasses}`}>
        <div className="ml-1 inline-block">{text}</div>
        <svg
          className="ml-2 w-6 h-6 inline-block animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </Link>
  );
}
