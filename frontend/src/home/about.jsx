import React, { Component } from "react";
import { Element } from "react-scroll";

export const About = () => {
  return (
    <Element name="about">
      <div id="aboutMe" className="about">
        <h1>About Me</h1>
        <p id="homeText">
          Hi I'm Hamza. I am currently in my third year at York University for
          Computer Science. I have a love for technology, basketball, and the
          arts. I like working with a full-stack, check out some of my work and
          skills below!
        </p>
        <p id="homeText">
          Hi I'm Hamza. I am currently in my third year at York University for
          Computer Science. I have a love for technology, basketball, and the
          arts. I like working with a full-stack, check out some of my work and
          skills below!
        </p>
        <div id="knownTechs">
          <b>Some technologies that I'm familiar with:</b>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Java</li>
            <li>DMBS/SQL</li>
          </ul>
        </div>
      </div>
    </Element>
  );
};
