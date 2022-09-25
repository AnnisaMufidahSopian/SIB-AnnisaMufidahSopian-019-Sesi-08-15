import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  useEffect(() => {
    //memperbarui judul dokumen menggunakan API browser
    document.title = `Hello Styling`;
  });

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
