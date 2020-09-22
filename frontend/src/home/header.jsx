import React, { Component } from "react";
import avatar from "../images/avatar.png";
import { NetLinks } from "./links";
import { animated, useSpring } from "react-spring";
import { HomeNav } from "./nav";

export const Header = () => {
  const name = useSpring({
    config: { duration: 600 },
    delay: 20,
    opacity: 1,
    from: { opacity: 0 },
  });
  const title = useSpring({
    config: { duration: 600 },
    delay: 500,
    opacity: 1,
    from: { opacity: 0 },
  });
  const intro = useSpring({
    config: { duration: 600 },
    delay: 1000,
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <div className="col" id="aboutSec">
      <HomeNav />
      <div id="mainSplash">
        <NetLinks />
        <div id="avatarContainer">
          <img src={avatar} alt="Preview" class="avatar" />
        </div>

        <div className="heading">
          <animated.div style={name}>
            <h2 className="name">Hamza Saleem</h2>
          </animated.div>
          <animated.div style={title}>
            <h2 className="title">Software Developer</h2>
          </animated.div>
        </div>

        <animated.div style={intro}>
          <p id="info">
            Hi there! I'm a software developer based in Toronto, Canada that
            likes working with full-stack applications, check out some of my
            work below!
          </p>
        </animated.div>
      </div>
    </div>
  );
};
