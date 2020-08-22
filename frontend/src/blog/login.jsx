import React, { Component } from "react";
import { Button, Form, FormGroup, FormControl } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import auth from "./authenticate";

class Login extends Component {
  constructor(props){
    
    super(props)
    this.state = {
      user: null,
      pass: null
    }
    this.redirect = this.redirect.bind(this);
    
  }

  redirect = () =>  {
    console.log("asdasdasdasd");
    this.props.history.push("/admin");
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    auth.login(data.user, data.pass).then(() => {
      if (auth.isAdmin()) { this.redirect()}
    })
    
   
  
  }
  handleInputChange = (event) => {
    event.preventDefault();
    const target = event.target;
    let value = event.target.value
    if (target.name === 'user') { value = target.value;}
    if (target.name === 'pass') { value = target.value;}
    this.setState({
      [target.name]: value 
    });
  }
  render (){
    const {fullName} = this.state;
    return(
    <div>
      <form onSubmit = {this.handleSubmit }>
        <p><input type = 'text' name = 'user' onChange = {this.handleInputChange} ></input></p>
        <p><input type = 'password' name = 'pass' onChange = {this.handleInputChange}></input></p>
        <p><button>Submit</button></p>
      </form>
    </div>
    )
  }
};

export default withRouter(Login);
