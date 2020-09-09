import React, { Component } from "react";

import { Header } from "./header";
import { HomeNav } from "./nav";
import { About } from "./about";
class Home extends Component {
  render() {
    return (
      <div className="container" id="appContainer">
        <HomeNav />
        <div className="row align-items-start" id="firstRow">
          <Header />
        </div>
        <div className="row align-items-center" id="firstRow">
          <About />
        </div>
      </div>
    );
  }
}

export default Home;
