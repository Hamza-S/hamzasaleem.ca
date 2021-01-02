import React, { Component } from "react";
import { Element } from "react-scroll";
import github from "../images/github32.png";
import link from "../images/link.png";
import proj1 from "../images/proj1Image.png";
import proj2 from "../images/instabook.png";
export const Projects = () => {
  return (
    <Element name="project">
      <div id="myProjects">
        <h1 id="projectSection">Projects</h1>
        <div class="myProject">
          <div class="projectLeftside">
            <h3 class="projectTitle">hamzasaleem.ca</h3>
            <p>This website which is used to portray my skills and projects!</p>
            <ul class="techsUsed">
              <li>Node</li>
              <li>React</li>
              <li>Express</li>
              <li>PostgreSQL</li>
            </ul>
            <div>
              <button
                class="projectLinks"
                onClick={() =>
                  window.open(
                    "https://github.com/Hamza-S/hamzasaleem.ca",
                    "_blank"
                  )
                }
              >
                <img src={github} class="linkButton" />
                Code
              </button>
            </div>
          </div>
          <div
            class="projectRightside"
            style={{
              backgroundImage: "url(" + proj1 + ")",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div class="myProject">
          <div class="projectLeftside">
            <h3 class="projectTitle">InstaBook</h3>
            <p>
              An e-commerce full-stack application to sell books, add reviews,
              and more.
            </p>
            <ul class="techsUsed">
              <li>Java</li>
            </ul>
            <div>
              <button
                class="projectLinks"
                onClick={() =>
                  window.open("https://github.com/Hamza-S/BookStore", "_blank")
                }
              >
                <img src={github} class="linkButton" />
                Code
              </button>
            </div>
          </div>
          <div
            class="projectRightside"
            style={{
              backgroundImage: "url(" + proj2 + ")",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </Element>
  );
};
