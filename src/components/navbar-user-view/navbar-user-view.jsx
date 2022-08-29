import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import { NavbarView } from '../navbar-view/navbar-view';

export class NavbarUserView extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        user: this.props.user
       // email: this.props.email,
       //birthday: this.props.birthday
    };
}

componentDidUpdate(prevProps) {
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
    window.open('/', '_self'); //location.reload();
  }

  render () {
    const { user, email, birthday } = this.state;
    if (!user) return <NavbarView />
    
    return (
      <Navbar variant="dark" bg="dark" fixed="top" expand="md">
        <Container>
          <Navbar.Brand href="#"><h1>myFlix Movies</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown className="navbar-nav" title={<span className="text">Hi, {user}!</span>} id="basic-nav-dropdown">
                <NavDropdown.Item>Password: ***</NavDropdown.Item>
                <NavDropdown.Item>Email: {email}</NavDropdown.Item>
                <NavDropdown.Item>Birthday: {birthday}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><Link to={'/users/:username'}>Edit Profile</Link></NavDropdown.Item>
                <NavDropdown.Item>Edit Favorite Movies</NavDropdown.Item>
                <NavDropdown.Item onClick={() => { this.onLoggedOut(); }}>Logout</NavDropdown.Item>
              </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
