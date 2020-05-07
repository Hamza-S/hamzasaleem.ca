import React, { Component } from "react";
import Post from "./Post.jsx";
class PostContainer extends Component {
  render() {
    return (
      <div className="container" id="postContainer">
        <div className="row align-items-center" id="blogfirstRow">
          <h1 id="title">
            <b>My Blog</b>
          </h1>
          <p id="intro">
            Welcome to my blog! My name is Hamza I am an undergraduate student
            at York University studying Computer Science. This blog consists of
            posts ranging from world issues, television shows, movies, software
            development, or really anything on my mind that I want to talk
            about.
          </p>
        </div>
        <Post />
      </div>
    );
  }
}

export default PostContainer;
