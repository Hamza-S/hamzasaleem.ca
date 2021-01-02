import React, { Component } from "react";
import { HomeNav } from "../home/nav";
import axios from "axios";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import { animateScroll as scroll, Link, Element } from "react-scroll";

class BlogIntro extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  fetchPosts() {
    axios
      .get("https://hamzasaleem.ca/get_posts")
      .then((res) => res.data)
      .then((res) => this.setState({ posts: res }));
  }

  componentDidMount() {
    this.fetchPosts();
  }

  processIndex() {
    let indices = this.state.posts
      .slice(0)
      .reverse()
      .map(function (posts) {
        return [
          <tr>
            <Link duration={300} smooth={true} offset={-50} to={posts.title}>
              <td className="index">
                {posts.date} - {posts.title}
              </td>
            </Link>
          </tr>,
        ];
      });
    return indices;
  }

  render() {
    if (!this.state.posts) {
      return <div>Loading...</div>;
    } else {
      return (
        <div id="introContainer">
          <div className="row align-items-center" id="blogfirstRow">
            <h1 id="title">
              <b>Hamza's Blog</b>
            </h1>
            <h5 id="aboutmeBlog">About Me</h5>
            <p id="intro">
              Welcome to my blog! My name is Hamza I am an undergraduate student
              at York University studying Computer Science. This blog consists
              of posts ranging from world issues, television shows, movies,
              software development, or really anything on my mind that I want to
              talk about.
            </p>
          </div>

          <div className="row align-items-center" id="entries">
            <h5 id="entriesTitle">Entries</h5>
            <div id="indexContainer">
              <table id="entryTable">{this.processIndex()}</table>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default BlogIntro;
