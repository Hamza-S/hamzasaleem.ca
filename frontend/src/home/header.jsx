import React, { Component } from "react";
import avatar from "../avatar.png";
import { NetLinks } from "./links";
import { animated, useSpring } from "react-spring";

export const Header = () => {
  const name = useSpring({
    config: { duration: 1000 },
    delay: 100,
    opacity: 1,
    from: { opacity: 0 },
  });
  const title = useSpring({
    config: { duration: 1000 },
    delay: 800,
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <div className="col" id="aboutSec">
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

        <p id="info">
          Hi there! I'm a software developer based in Toronto, Canada that likes
          working with full-stack applications, check out some of my work below!
        </p>
      </div>
    </div>
  );
};
