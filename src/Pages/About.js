import React, { Component } from "react";
import "../Style/main.css";
//image
import profilePicture from "../images/profile.jpg";

export default class About extends Component {
  render() {
    return (
      <div className="px-10 mt-10">
        <div className=" grid lg:grid-cols-2 grid-col-1 gap-y-7">
          <div className="rounded-full overflow-hidden sm:w-96 w-60 sm:h-96 h-60 mx-auto md:mx-auto lg:ml-12 xl:ml-28  md:mt-20 sm:mt-10 -left-96">
            <img
              className="relative sm:-top-24 -top-12 "
              src={profilePicture}
              alt="Profile of francisco paliouras"
            ></img>
          </div>
          <div className="text-xl md:mr-24 md:ml-12">
            <h1 className="sm:text-2xl text-lg mb-4  font-semibold">
              A little bit about Francisco Paliouras...
            </h1>
            <p className="sm:text-xl text-lg">
              Hello, my name is Francisco Paliouras, I am currently a student at
              Rochester Institute of Technology majoring in Web and Mobile
              Computing. I am a Full stack developer, but due to my graphic
              design background I tend to prefer front-end development. I have a
              passion for all types of technologies and welcome any opportunity
              to increase my knowledge on them. Presently I am working as a
              freelance developer building both static websites and web
              applications while also offering my services pro bono to the
              Peruvian NGO,{" "}
              <a
                href="https://www.misionhuascaran.org.pe/"
                className="text-blue-400 hover:text-blue-600"
              >
                Mission Huascaran
              </a>
              , managing their website and digital store. I am currently looking
              for a more professional setting where I can put my current skills
              to the test as well gain experience working in bigger teams,
              learning from my peers, and growing my network.
            </p>
          </div>
        </div>
        <div className="mt-8 space-y-2 items-center justify-end flex-1 h-full p-4 rounded-xl filter drop-shadow-lg border-gray-200 border">
          <h1 className="text-lg font-semibold">Contact Information</h1>
          <p>
            Main email:{" "}
            <a
              className="text-blue-400 hover:text-blue-600 sm:text-base text-xs"
              href="franciscopaliouras@gmail.com"
            >
              franciscopaliouras@gmail.com
            </a>
          </p>
          <p>
            Secondary email:{" "}
            <a
              className="text-blue-400 hover:text-blue-600"
              href="fxp6816@rit.edu"
            >
              fxp6816@rit.edu
            </a>
          </p>
          <p>Phone: (585)420-8095</p>
        </div>
        <div className="mt-8 space-y-2 items-center justify-end flex-1 h-full p-4 rounded-xl filter drop-shadow-lg border-gray-200 border">
          <h1 className="text-lg font-semibold">Favorite Stack</h1>
          <p>MERN (MongoDB, Express, React, Node)</p>
        </div>
        <div className="mt-8  space-y-2 items-center justify-end flex-1 h-full p-4 rounded-xl filter drop-shadow-lg border-gray-200 border">
          <h1 className="text-lg font-semibold">Favorite Quote</h1>
          <p>"Good artists copy, great artists steal." - Pablo Picasso</p>
        </div>
      </div>
    );
  }
}
