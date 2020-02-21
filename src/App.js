import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import Portfolio from "./components/portfolio";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage:
          "url(" +
          "https://images.unsplash.com/photo-1477173860144-6f21cf27086a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Header />
      <div className="container" id="appContainer">
        <div className="row align-items-start" id="firstRow">
          <About />
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default App;
