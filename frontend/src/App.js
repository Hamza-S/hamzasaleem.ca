import React from "react";
import logo from "./logo.svg";
import bg from "./bg.jpg";
import "./App.css";
import "./blog/page_blog.css";
import Home from "./home/home";
import Blog from "./blog/blog";
import Admin from "./blog/admin";
import Login from "./blog/login";
import auth from "./blog/authenticate";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path = "/admin">
            <Admin/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
