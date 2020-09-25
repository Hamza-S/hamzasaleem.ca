import React, { Component } from "react";
import PostContainer from "./PostContainer";
import axios from "axios";
import auth from "./authenticate";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: "",
      date: "",
      body: "",
    };
    this.redirect = this.redirect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  redirect = () => {
    this.props.history.push("/blog");
  };

  async handleSubmit(event) {
    event.preventDefault();
    const data = this.state;
    if (auth.isAdmin()) {
      const res = await axios
        .post("https://hamzasaleem.ca/newpost", {
          id: data.id,
          title: data.title,
          date: data.date,
          body: data.body,
        })
        .then((res) => {
          console.log("New post created");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    this.redirect();
  }
  handleInputChange = (event) => {
    event.preventDefault();
    const target = event.target;
    let value = event.target.value;
    this.setState({
      [target.name]: value,
    });
  };
  render() {
    const { title } = this.state;
    const { date } = this.state;
    const { body } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="newPost">
          <p>
            id
            <input
              type="number"
              name="id"
              onChange={this.handleInputChange}
            ></input>
          </p>
          <p>
            title
            <input
              type="text"
              name="title"
              onChange={this.handleInputChange}
            ></input>
          </p>
          <p>
            date
            <input
              type="text"
              name="date"
              onChange={this.handleInputChange}
            ></input>
          </p>
          <textarea
            rows="4"
            cols="50"
            name="body"
            form="newPost"
            onChange={this.handleInputChange}
          ></textarea>

          <p>
            <button>Submit</button>
          </p>
        </form>
        <div className="row align-items-center" id="post">
          <h1 id="postTitle"> {title}</h1>
          <h2 id="postDate">{date}</h2>
          {ReactHtmlParser(body)}
        </div>
      </div>
    );
  }
}

export default Admin;
