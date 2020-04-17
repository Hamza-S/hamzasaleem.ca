import React, { Component } from "react";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <div className="row align-items-center" id="thirdRow">
        <div className="col" id="project">
          <h2>portfolio</h2>
          <p>
            An nba score app that tells you live stats and scores from ongoing
            games in the NBA, as well as the leaders for today
          </p>
        </div>
        <div className="col" id="project">
          <a href="https://github.com/Hamza-S">
            <i class="fa fa-github" id="icons"></i>
          </a>
          <h2>nba-hub</h2>
          <p>
            An nba score app that tells you live stats and scores from ongoing
            games in the NBA, as well as the leaders for today
          </p>
        </div>
        <div className="col" id="project">
          <h2>blog</h2>
          <p>
            An nba score app that tells you live stats and scores from ongoing
            games in the NBA, as well as the leaders for today
          </p>
        </div>
      </div>
    );
  }
}

export default Portfolio;
