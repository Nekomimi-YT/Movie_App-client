import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
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
      user: this.props.user
      });  
    } 
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    localStorage.removeItem('birthday');
    localStorage.removeItem('favorites');
    this.setState({
      user: null
    });
    window.open('/', '_self');
  }

  render () {
    const { user } = this.props;
    if (!user) return <NavbarView />
    
    return (
      <Navbar variant="dark" bg="dark" fixed="top" expand="md">
        <Container>
          <Navbar.Brand href="/"><h1>LisFlix</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="greeting mr-5">Hi, { user }</Navbar.Text>
          <NavDropdown className="navbar-nav" title={<span className="text">Your Info</span>} id="basic-nav-dropdown">
            <NavDropdown.Item><Link to={`/users/${user}`}><h6>Edit Profile</h6></Link></NavDropdown.Item>
            <NavDropdown.Item><Link to={`/myfavorites`}><h6>Favorite Movies</h6></Link></NavDropdown.Item>
            <NavDropdown.Item onClick={() => { this.onLoggedOut(); }}><h6>Logout</h6></NavDropdown.Item>
          </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
