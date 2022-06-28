import React, { Component } from "react";
import "../Style/main.css";
//image load
import LandingImg from "../images/Landing.png";
//components
import ButtonLink from "../Components/ButtonLink";

export default class Home extends Component {
  render() {
    return (
      <div className="grid md:grid-cols-2 gap-x-10 grid-cols-1 content-center md:p-36 p-12">
        <div className="order-last sm:-mt-8 mt-4">
          <h1 className="text-2xl font-black mb-4 inline">
            Welcome to my Protafolio Website
          </h1>

          <p className="text-lg">
            You can find all the required information about me and my work, I
            hope you like what you see. In the meantime why don't you take a
            look at some of my projects!!
          </p>
          <ButtonLink
            customCss="w-48"
            text="Visit Projects"
            route="/projects"
          />
        </div>

        <div className="">
          <img
            className="object-contain	 inline"
            src={LandingImg}
            alt="Art for landing page"
          ></img>
        </div>
      </div>
    );
  }
}
