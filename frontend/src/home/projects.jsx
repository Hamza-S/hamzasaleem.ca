import React, { Component } from "react";

export const Projects = () => {
  return (
    <div id="myProjects">
      <h1 id="projectSection">Projects</h1>
      <div class="myProject">
        <h3>hamzasaleem.ca & personal blog</h3>
        <p>This website which is used to portray my skills and projects!</p>
        <div>
          <button class="projectLinks">asd</button>
          <button class="projectLinks">asd</button>
        </div>
        <ul class="techList">
          <h5>Technologies used:</h5>
          <li class="techTag">Node.js</li>
          <li class="techTag">React</li>
          <li class="techTag">JavaScript</li>
          <li class="techTag">PostgreSQL</li>
        </ul>
      </div>
      <div class="myProject">
        <h3>hamzasaleem.ca</h3>
        <p>This website which is used to portray my skills and projects!</p>
      </div>
      <div class="myProject">
        <h3>hamzasaleem.ca</h3>
        <p>This website which is used to portray my skills and projects!</p>
      </div>
    </div>
  );
};
