import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export const HomeNav = () => {
  return (
    <div>
      <Nav className="justify-content-end" activeKey="/home" id="navBar">
        <Nav.Item>
          <Nav.Link href="/home">
            <h5>Home</h5>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <h5>About</h5>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <h5>Projects</h5>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/blog">
            <h5>Blog</h5>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
