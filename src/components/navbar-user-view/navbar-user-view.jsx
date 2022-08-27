import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import { NavbarView } from '../navbar-view/navbar-view';

export class NavbarUserView extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        user: this.props.user
    };
}

componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.user !== prevProps.user) {
    console.log(this.props.user, prevProps.user);
    this.setState({
      user: this.props.user
    })
  }
}

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
    window.open('/', '_self') //location.reload();
  }

  render () {
    const { user } = this.state;
    if (!user) return <NavbarView />
    
    return (
      <Navbar variant="dark" bg="dark" fixed="top" expand="md">
        <Container>
          <Navbar.Brand href="#"><h1>myFlix Movies</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown className="navbar-nav" title={<span className="text">My Profile</span>} id="basic-nav-dropdown">
                <Link to={'/users/profile'}>
                  <NavDropdown.Item>View Profile</NavDropdown.Item>
                </Link>
                <NavDropdown.Item href="#">Edit Favorite Movies</NavDropdown.Item>
                <NavDropdown.Item onClick={() => { this.onLoggedOut(); }}>Logout</NavDropdown.Item>
              </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
