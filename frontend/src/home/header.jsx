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
      <NetLinks />
      <animated.div style={name}>
        <h2 className="name">
          <img src={avatar} alt="Preview" class="avatar" />
        </h2>
      </animated.div>
      <div className="heading">
        <animated.div style={name}>
          <h2 className="name">Hamza Saleem</h2>
        </animated.div>
        <animated.div style={title}>
          <h2 className="title">Software Developer</h2>
        </animated.div>
      </div>
      <div className="col" id="info">
        <p>
          Hi I'm Hamza. I am currently in my third year at York University for
          Computer Science. I have a love for technology, basketball, and the
          arts. I like working with a full-stack, check out some of my work and
          skills below!
        </p>
      </div>
    </div>
  );
};
