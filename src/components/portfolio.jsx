import React, { Component } from "react";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <div className="row align-items-center" id="thirdRow">
        <div className="col" id="project">
          <h2>
            portfolio{"\t\t\t"}
            <a href="https://github.com/Hamza-S/portfolio">
              <i class="fa fa-github" id="icon2"></i>
            </a>{" "}
          </h2>
          <p>
            A website for my personal portfolio that showcases the projects I
            have worked on.
          </p>
          <div className="techs">
            <h9 className="tag">React</h9>
            <h9 className="tag">JavaScript</h9>
          </div>
        </div>
        <div className="col" id="project">
          <h2>
            nba-hub{" "}
            <a href="https://github.com/Hamza-S">
              <i class="fa fa-github" id="icon2"></i>
            </a>{" "}
          </h2>
          <p>
            Access statistics and information on NBA teams and players, as well
            as view live score from games.
          </p>
          <div className="techs">
            <h9 className="tag">Python</h9>
            <h9 className="tag">React</h9>
            <h9 className="tag">NodeJS</h9>
            <h9 className="tag">Express</h9>
            <h9 className="tag">SQL</h9>
          </div>
        </div>
        <div className="col" id="project">
          <h2>
            blog{" "}
            <a href="https://github.com/Hamza-S">
              <i class="fa fa-github" id="icon2"></i>
            </a>{" "}
          </h2>
          <p>Personal blog site used to share my ideas</p>
          <div className="techs">
            <h9 className="tag">React</h9>
            <h9 className="tag">NodeJS</h9>
            <h9 className="tag">Express</h9>
            <h9 className="tag">SQL</h9>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
