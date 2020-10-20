import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <header>
      <Navbar variant="light" fixed='top'>
        <Navbar.Brand id="navbar-brand" href="#home">TBug</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
        <Nav activeKey="#home">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About us</Nav.Link>
          <Nav.Link href="#pricing">Contact us</Nav.Link>
        </Nav>
        </Navbar.Collapse>     
      </Navbar>
    </header>
  );
};

export default Header;
