import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { animateScroll as scroll, Link } from "react-scroll";

export const HomeNav = () => {
  return (
    <div>
      <Nav className="justify-content-end" activeKey="/home" id="navBar">
        <Nav.Item>
          <Link duration={300} smooth={true} offset={-50} to="about">
            <Nav.Link eventKey="link-1">
              <h6>1. About</h6>
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link duration={300} smooth={true} offset={25} to="project">
            <Nav.Link eventKey="link-1">
              <h6>2. Projects</h6>
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/blog">
            <h6>3. Blog</h6>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
