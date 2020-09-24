import React from "react";
import "./home/home_mobile.css";
import "./home/home.css";
import "./blog/blog.css";
import { Home } from "./home/home";
import Blog from "./blog/blog";
import Admin from "./blog/admin";
import Login from "./blog/login";
import auth from "./blog/authenticate";
import { ProtectedRoute } from "./blog/protectedroute";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap"
        rel="stylesheet"
      ></link>

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
          <ProtectedRoute exact path="/admin" component={Admin} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
