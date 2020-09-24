import React, { Component } from "react";
import { Element } from "react-scroll";
import pyLogo from "../images/icons8-python-48.png";
import jsLogo from "../images/icons8-javascript-48.png";
import reactLogo from "../images/icons8-react-native-48.png";
import nodeLogo from "../images/icons8-nodejs-48.png";
import javaLogo from "../images/icons8-java-48.png";
import dbLogo from "../images/icons8-database-48.png";
import c from "../images/icons8-c-programming-48.png";
import git from "../images/icons8-git-48.png";
import htmlIcon from "../images/icons8-html-5-48.png";
import cssIcon from "../images/icons8-css3-48.png";

export const About = () => {
  return (
    <Element name="about">
      <div id="aboutMe" className="about">
        <h1 id="aboutTitle">About Me</h1>
        <p id="homeText">
          Hello! I'm Hamza, a software developer and fourth year undergraduate
          student at <b id="yorkU">York University</b> majoring in Computer
          Science, that is currently searching for summer 2021 internship
          opportunities.
        </p>
        <p id="homeText">
          I like to work with a full-stack, and{" "}
          <h7 id="homeHighlight">
            {" "}
            strive to deliver applications that are effecient, reliable,
            visually appealing, and user-friendly.
          </h7>
        </p>
        <p id="homeText">
          Apart from development, I'm a huge fan of basketball (more
          specifically the 2019-2020 NBA champions - the Toronto Raptors),
          movies, and music!
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
              SQL/DB
            </li>
          </ul>
          <ul class="knownTechList2">
            <li
              style={{
                backgroundImage: "url(" + c + ")",
                backgroundRepeat: "no-repeat",
              }}
            >
              C
            </li>
            <li
              style={{
                backgroundImage: "url(" + git + ")",
                backgroundRepeat: "no-repeat",
              }}
            >
              Git
            </li>
            <li
              style={{
                backgroundImage: "url(" + htmlIcon + ")",
                backgroundRepeat: "no-repeat",
              }}
            >
              HTML
            </li>
            <li
              style={{
                backgroundImage: "url(" + cssIcon + ")",
                backgroundRepeat: "no-repeat",
              }}
            >
              CSS
            </li>
          </ul>
        </div>
      </div>
    </Element>
  );
};
