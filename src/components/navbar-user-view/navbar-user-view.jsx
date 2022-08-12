import React from 'react';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';

export function NavbarUserView() {

  return (
    <Navbar variant="dark" bg="dark" fixed="top" expand="md">
      <Container>
        <Navbar.Brand href="#"><h1>myFlix Movies</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown className="navbar-nav" title={<span class="text">My Profile</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Update Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Edit Favorite Movies</NavDropdown.Item>
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
} 