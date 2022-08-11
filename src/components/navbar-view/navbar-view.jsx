import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './navbar-view.scss'

export function NavbarView() {

  return (
    <Navbar bg="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home"><h1>myFlix movies</h1></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text">
            Welcome!
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
} 