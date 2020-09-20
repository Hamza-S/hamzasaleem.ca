import React, { Component } from "react";
import { Element } from "react-scroll";
import pyLogo from "../images/icons8-python-48.png";
import jsLogo from "../images/icons8-javascript-48.png";
import reactLogo from "../images/icons8-react-native-48.png";
import nodeLogo from "../images/icons8-nodejs-48.png";
import javaLogo from "../images/icons8-java-48.png";
import dbLogo from "../images/icons8-database-48.png";

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
          <h7>Some technologies that I'm familiar with:</h7>
          <ul class="knownTechList">
            <li
              style={{
                backgroundImage: "url(" + jsLogo + ")",
                backgroundRepeat: "no-repeat",
              }}
            >
              JavaScript
            </li>
            <li
              style={{
                backgroundImage: "url(" + pyLogo + ")",
                backgroundRepeat: "no-repeat",
              }}
            >
              Python
            </li>
            <li
              style={{
                backgroundImage: "url(" + nodeLogo + ")",
                backgroundRepeat: "no-repeat",
              }}
            >
              Node.js
            </li>
            <li
              style={{
                backgroundImage: "url(" + reactLogo + ")",
                backgroundRepeat: "no-repeat",
              }}
            >
              React
            </li>
            <li
              style={{
                backgroundImage: "url(" + javaLogo + ")",
                backgroundRepeat: "no-repeat",
              }}
            >
              Java
            </li>
            <li
              style={{
                backgroundImage: "url(" + dbLogo + ")",
                backgroundRepeat: "no-repeat",
              }}
            >
              DMBS/SQL
            </li>
          </ul>
        </div>
      </div>
    </Element>
  );
};
