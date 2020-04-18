import React from "react";
import logo from "./logo.svg";
import bg from "./bg.jpg";
import "./App.css";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
      <Home />
    </div>
  );
}

export default App;
