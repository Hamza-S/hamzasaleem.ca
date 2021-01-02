import React, { Component } from "react";
import PostContainer from "./PostContainer";
import BlogIntro from "./BlogIntro";

const Blog = () => {
  return (
    <div id="Blog">
      <BlogIntro />
      <PostContainer />
    </div>
  );
};

export default Blog;
