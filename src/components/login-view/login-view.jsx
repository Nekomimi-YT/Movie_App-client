// movie_app-client/src/components/login-view/login-view.jsx

import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';

import { setUser } from '../../actions/actions';

import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://myflix-movieapp-bylisa.herokuapp.com/login', {
      Username: username,
      Password: password
    })
    .then(response => { 
      const data = response.data;
      props.onLoggedIn(data);
      //props.setUser(data);
    })
    .catch(error => {
      console.log(error);
      alert('Username or password not found');
    })
  };

  return (
    <Card className="box-shadow card-background">
      <Card.Body>
      <Card.Title><h2>Login Here!</h2></Card.Title>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control className="input-font input-background" type="text" onChange={e => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control className="input-font input-background" type="password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="secondary" size="sm" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      
        <p>New to LisFlix?{" "} 
          <Link to={"/register"}>
            <Button variant="secondary" type="button" size="sm">Register</Button>
          </Link>
        </p>
      </Card.Body>
      </Card>
  );
}

let mapStateToProps = state => {
  return { user: state.user }
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { setUser } )(LoginView);