// movie_app-client/src/components/login-view/login-view.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import {RegistrationView} from '../registration-view/registration-view'
import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a request to the server for authentication, then call props.onLoggedIn(data)
    axios.post('https://myflix-movieapp-bylisa.herokuapp.com/login', {
      Username: username,
      Password: password
    })
    .then(response => { 
      const data = response.data;
      props.onLoggedIn(data);
    })
    .catch(error => console.log(`no such user: ${error}`))
  };

  const gotoRegistrationView = (e) => {
    console.log('register new user');
    // Reroute to registration page
    //return (
    //  <RegistrationView />
    //)
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
          <Button variant="secondary" type="button" size="sm" onClick={gotoRegistrationView}>Register</Button></p>
    </div>
  );
}