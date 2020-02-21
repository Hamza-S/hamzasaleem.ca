import React, { Component } from "react";
import {
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
  Nav,
  Form,
  FormControl,
  Button,
  Container
} from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
class Header extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Navbar bg="light" expand="lg">
          <Nav className="ml-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
