import React, { Component } from "react";
import { Element } from "react-scroll";
import github from "../images/github32.png";
import link from "../images/link.png";
import test from "../images/test.png";
export const Projects = () => {
  return (
    <Element name="project">
      <div id="myProjects">
        <h1 id="projectSection">Projects</h1>
        <div class="myProject">
          <div class="projectLeftside">
            <h3>hamzasaleem.ca & personal blog</h3>
            <p>This website which is used to portray my skills and projects!</p>

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
              backgroundImage: "url(" + test + ")",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </Element>
  );
};
