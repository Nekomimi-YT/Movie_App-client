// movie_app-client/src/components/login-view/login-view.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';
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

  return (
    <Card className="box-shadow">
      <Card.Body>
      <Card.Title><h2>Login Here!</h2></Card.Title>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control className="inputFont" type="text" onChange={e => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control className="inputFont" type="password" onChange={e => setPassword(e.target.value)} />
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