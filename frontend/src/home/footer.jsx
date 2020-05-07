import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="col" id="info">
        <p>
          Hi I'm Hamza. I am currently in my third year at York University for
          Computer Science. I have a love for technology, basketball, and the
          arts. I like working with a full-stack, check out some of my work and
          skills below!
        </p>
        <ul class="list-group list-group-horizontal" id="buttons">
          <li class="list-group-item">
            <a href="https://github.com/Hamza-S">
              <i class="fa fa-github" id="icons"></i>
            </a>
          </li>
          <li class="list-group-item">
            <a href="https://www.linkedin.com/in/hamza-saleem-54702b142/">
              <i class="fa fa-linkedin" id="icons"></i>
            </a>
          </li>
          <li class="list-group-item">
            <a href="https://www.linkedin.com/in/hamza-saleem-54702b142/">
              <i class="fa fa-file-text" id="icons"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
