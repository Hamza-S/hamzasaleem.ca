import React, { Component } from "react";

import About from "../home/about";
import Portfolio from "../home/portfolio";
import Footer from "../home/footer";
class Home extends Component {
  render() {
    return (
      <div className="container" id="appContainer">
        <div className="row align-items-start" id="firstRow">
          <About />
        </div>
        <div className="row align-items-center" id="secondRow">
          <Footer />
        </div>
        <Portfolio />
      </div>
    );
  }
}

export default Home;
