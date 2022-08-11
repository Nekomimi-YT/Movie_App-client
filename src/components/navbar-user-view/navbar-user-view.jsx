import React from 'react';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';

export function NavbarUserView() {

  return (
    <Navbar bg="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home"><h1>myFlix Movies</h1></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title= {<span className="text">My Profile</span>} id="nav-dropdown">
              <NavDropdown.Item href="#">Update Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Edit Favorite Movies</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
} 