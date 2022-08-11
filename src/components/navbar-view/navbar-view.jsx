import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export function NavbarView() {

  return (
    <Navbar bg="light" variant="light" fixed="top">
      <Container>
        <Navbar.Brand href="#home">myFlix Movies</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Welcome!
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
} 