import React, { Component } from "react";

import "../Style/main.css";

import GithubContainer from "../Components/GithubContainer";
export default class Projects extends Component {
  render() {
    return (
      <div>
        <GithubContainer userName="fpalio" />
      </div>
    );
  }
}
