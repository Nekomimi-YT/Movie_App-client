// movie_api-client/src/components/profile-view/profile-view.jsx

import React from 'react';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import './profile-view.scss';

export class ProfileView extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user: this.props.Username,
      email: this.props.Email,
      birthday: this.props.Birthday
    }; 
  }

  render() {
    const { user, email, birthday, onBackClick } = this.props;
    const navEmail = localStorage.getItem('email');
    const navBirthday = localStorage.getItem('birthday');

    return (
      <Card className="d-flex align-self-stretch m-2 box-shadow">
        {/*<Card.Img variant="top" src={ movie.ImagePath } crossOrigin="anonymous"/> POSSIBLE PHOTO ADD HERE*/}
        <Card.Body>
          <Button variant="link" className="closeCard" onClick={() => { onBackClick(); }}>{'<<'}Back</Button>
          <Card.Title>Update your myFlix Profile:</Card.Title>
          <Card.Text>Change any field and click the submit button to update.</Card.Text>
          <Card.Text>Username: { user }</Card.Text>
          <Card.Text>Password: *******</Card.Text>
          <Card.Text>Email: { navEmail }</Card.Text>
          <Card.Text>Birthday: { navBirthday }</Card.Text>
          <Card.Text>Favorites: {  }</Card.Text>
          <Button variant="secondary" size="sm" type="button">Edit Profile</Button>
          <div>
            <h4>Warning! Clicking this button will DELETE YOUR PROFILE!</h4>
            <Button variant="warning" size="sm" type="button">Unregister</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

/*ProfileView.propTypes = {
  userProfile: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.instanceOf(Date)
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};*/