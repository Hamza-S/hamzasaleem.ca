import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export const HomeNav = () => {
  return (
    <div>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/blog">Blog</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
