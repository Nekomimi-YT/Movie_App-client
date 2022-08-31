import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './navbar-view.scss'

export function NavbarView() {
    return ( <Navbar bg="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#"><h1>L'sFlix</h1></Navbar.Brand>
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