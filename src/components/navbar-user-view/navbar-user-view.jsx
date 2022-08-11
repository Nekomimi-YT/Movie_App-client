import React from 'react';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';

export function NavbarUserView() {

  return (
    <Navbar bg="light" variant="light" fixed="top">
      <Container>
        <Navbar.Brand href="#home">myFlix Movies</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title="My Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item>Username</NavDropdown.Item>
              <NavDropdown.Item>Password: Hidden</NavDropdown.Item>
              <NavDropdown.Item>Email</NavDropdown.Item>
              <NavDropdown.Item>Birthday</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Update Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Edit Favorite Movies</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
} 