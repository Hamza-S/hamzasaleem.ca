import React, { Component } from "react";

import { Header } from "./header";
import { HomeNav } from "./nav";
import { About } from "./about";
import { Projects } from "./projects";
import { Footer } from "./footer";
import { animated, useSpring } from "react-spring";
export const Home = () => {
  const name = useSpring({
    config: { duration: 2000 },
    delay: 100,
    height: 1000,
    from: { height: 0 },
  });
  return (
    <div className="container" id="appContainer">
      <Header />
      <div className="row align-items-center" id="aboutRow">
        <About />
      </div>
      <div className="row align-items-center" id="projectRow">
        <Projects />
      </div>
      <div className="row align-items-start" id="footerRow">
        <Footer />
      </div>
    </div>
  );
};
