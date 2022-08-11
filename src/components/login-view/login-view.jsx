// movie_app-client/src/components/login-view/login-view.jsx

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {RegistrationView} from '../registration-view/registration-view'
import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    // Send a request to the server for authentication, then call props.onLoggedIn(username)
    props.onLoggedIn(username);
  };

  const handleRegistrationView = (e) => {
    console.log('register new user');
    // Send a POST request to the server, then reroute to the login page again
    return (
      <RegistrationView />
    )
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="secondary" size="sm" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
          <p>New to myFlix?{' '} 
          <Button variant="secondary" type="button" size="sm" onClick={handleRegistrationView}>Register</Button></p>
    </div>
  );
}