import React, { Component } from "react";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/get_posts")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="row align-items-center" id="blogfirstRow">
        <p className="App-intro">;{this.state.apiResponse}</p>
        <h1 id="postTitle">Introduction</h1>
        <h2 id="postDate">April 28 2020</h2>
        <p id="postContent">
          First post! I chose to make this blog because I wanted to showcase and
          improve my developer skills, while also providing myself a platform to
          speak my mind. I wanted to be able to argue and discuss topics in
          precise and organized manner, using science-based evidence to support
          my thinking. Truthfully, a main source of my motivation is the
          circulation of poor information during this COVID-19 pandemic we
          currently face. Among this pandemic, I find it baffling and frankly
          quite dangerous to see how people consume false information and take
          the information at face value without doing any further research. I
          hope to challenge these beliefs and prove why they are indeed
          incorrect.
        </p>
        <p id="postContent">
          Other than arguing, I will write posts about shows and movies that I
          love, technical jazz regarding software development, and maybe even
          book reviews if I ever get around to finishing one.
        </p>
      </div>
    );
  }
}

export default Post;
