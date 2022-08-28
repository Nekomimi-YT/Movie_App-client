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
        userProfile: this.props.userProfile
    };
}

  render() {
    const { userProfile, onBackClick } = this.props;
    return (
      <Card className="d-flex align-self-stretch m-2 box-shadow">
        {/*<Card.Img variant="top" src={ movie.ImagePath } crossOrigin="anonymous"/> POSSIBLE PHOTO ADD HERE*/}
        <Card.Body>
          <Button variant="link" className="closeCard" onClick={() => { onBackClick(); }}>{'<<'}Back</Button>
          <Card.Title>Your myFlix Profile</Card.Title>
          <Card.Text>Username: { userProfile.Username }</Card.Text>
          <Card.Text>Password: *******</Card.Text>
          <Card.Text>Email: { userProfile.Email }</Card.Text>
          <Card.Text>Birthday: { userProfile.Birthday }</Card.Text>
          <Button variant="secondary" size="sm" type="button">Edit Profile</Button>
          <h4>Warning! Clicking this button will DELETE YOUR PROFILE!</h4>
          <Button variant="warning" size="sm" type="button">Unregister</Button>
        </Card.Body>
      </Card>
    );
  }
}

ProfileView.propTypes = {
  userProfile: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.instanceOf(Date)
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};