import React from "react";
//pdf package
import file from "../images/resume.pdf";
//styleing
import "../Style/main.css";

const Resume = (props) => {
  return (
    <div>
      <div className="lg:block hidden">
        <embed src={file} type="application/pdf" width="100%" height="1000px" />
      </div>
      <div className="lg:hidden flex flex-wrap content-start">
        <div className="rounded mx-auto my-10">
          <div className="bg-blue-600 inline-block rounded-md py-2 px-3 hover:bg-blue-900 mx-auto">
            <svg
              className="w-6 h-6 inline"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              />
            </svg>
            <a className="text-sm  text-white" href={file}>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
