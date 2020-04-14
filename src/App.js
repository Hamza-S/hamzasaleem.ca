import React from "react";
import logo from "./logo.svg";
import bg from "./bg.jpg";
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
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container" id="appContainer">
        <div className="row align-items-start" id="firstRow">
          <About />
        </div>
        <div className="row align-items-center" id="secondRow">
          <Footer />
        </div>
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
