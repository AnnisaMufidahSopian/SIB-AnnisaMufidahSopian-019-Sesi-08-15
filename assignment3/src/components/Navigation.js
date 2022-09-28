import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

class Navigation extends React.Component {
  render() {
    return (
      <div className="fixed-top d-flex justify-content-around align-items-center">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#interest">Interest</Nav.Link>
                <Nav.Link href="#awards">Awards</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
