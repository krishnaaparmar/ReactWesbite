import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <Navbar className="fixed-top" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Krishna Parmar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="list">
            <Nav.Link>
              <Link to={"/"} className="items">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/services"} className="items">
              Services
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/about"} className="items">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/tools"} className="items">
                Tools
              </Link>
            </Nav.Link>
            {/* <Nav.Link>
              <Link to={"/report"} className="items">
                Report
              </Link>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
