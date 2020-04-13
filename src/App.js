import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="container" id="appContainer">
        <div className="row align-items-start" id="firstRow">
          <About />
        </div>
        <div className="row align-items-start" id="secondRow">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
