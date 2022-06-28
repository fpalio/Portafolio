import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//style
import "../Style/main.css";
//components
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
//pages
import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Resume from "../Pages/Resume";

const App = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth < 768 && isOpened) {
        setIsOpened(false);
      }
    };
    //separator
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <div className="body-content h-screen font-mono ">
      <Router>
        <Navbar toggle={toggle} />
        <Dropdown isOpened={isOpened} toggle={toggle} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
