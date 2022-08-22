import React from 'react';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';

export class NavbarUserView extends React.Component {
  
  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
    location.reload();
  }
  render () {

    return (
      <Navbar variant="dark" bg="dark" fixed="top" expand="md">
      <Container>
        <Navbar.Brand href="#"><h1>myFlix Movies</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown className="navbar-nav" title={<span class="text">My Profile</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Update Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Edit Favorite Movies</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { this.onLoggedOut(); }}>Logout</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
}



/*export function NavbarUserView() {

  function onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }

  return (
    <Navbar variant="dark" bg="dark" fixed="top" expand="md">
      <Container>
        <Navbar.Brand href="#"><h1>myFlix Movies</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown className="navbar-nav" title={<span class="text">My Profile</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Update Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Edit Favorite Movies</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { onLoggedOut(); }}>Logout</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
} */