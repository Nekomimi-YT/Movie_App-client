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
  if (this.props.user !== prevProps.user) {
    console.log(this.props.user, prevProps.user);
    this.setState({
      user: this.props.user,
    })  
  } 
}

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    localStorage.removeItem('birthday');
    this.setState({
      user: null
    });
    window.open('/', '_self'); //location.reload();
  }

  render () {
    const { user } = this.state;
    const navEmail = localStorage.getItem('email');
    const navBirthday = new Date(localStorage.getItem('birthday')).toString().substring(4, 11);

    if (!user) return <NavbarView />
    
    return (
      <Navbar variant="dark" bg="dark" fixed="top" expand="md">
        <Container>
          <Navbar.Brand href="/"><h1>myFlix Movies</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown className="navbar-nav" title={<span className="text">Hi, { user }!</span>} id="basic-nav-dropdown">
                <NavDropdown.ItemText><h6>Profile Info</h6></NavDropdown.ItemText>
                <NavDropdown.ItemText>
                  <p>
                    Password: ***<br />
                    Email: { navEmail }<br />
                    Birthday: { navBirthday }
                  </p>
                </NavDropdown.ItemText>
                <NavDropdown.Divider />
                <NavDropdown.Item><Link to={`/users/${user}`}><h6>Edit Profile</h6></Link></NavDropdown.Item>
                <NavDropdown.Item><h6>Edit Favorite Movies</h6></NavDropdown.Item>
                <NavDropdown.Item onClick={() => { this.onLoggedOut(); }}><h6>Logout</h6></NavDropdown.Item>
              </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
