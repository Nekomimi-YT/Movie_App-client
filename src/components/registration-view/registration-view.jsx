import React, { useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
//import { Link } from 'react-router-dom'
import './registration-view.scss';

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday ] = useState('');

  const [values, setValues] = useState({
    usernameErr: '',
    passwordErr: '',
    emailErr: ''
  });

  const validate = () => {
    let isReq = true;
    const passwordRegex = /\d/;
    const emailRegex = /^(.+)@(.+)$/;

    if(!username){
      setValues({...values, usernameErr: 'Username Required'});
      isReq = false;
    } else if(username.length < 3){
      setValues({...values, usernameErr:'Username must be at least 3 characters long'});
      isReq = false;
    }
    if(!password){
      setValues({...values, passwordErr: 'Password Required'});
      isReq = false;
    } else if(password.length < 6){
      setValues({...values, passwordErr: 'Password must be at least 6 characters long'});
      isReq = false;
    }else if(password !== passwordRegex) {
      etValues({...values, passwordErr:'Password must contain at least 1 digit'});
      isReq = false;
    }
    if(!email){
      setValues({...values, emailErr: 'Email Required'});
      isReq = false;
    } else if(email !== emailRegex){
      setValues({...values, emailErr: 'Not a valid email'});
      isReq = false;
     }
    return isReq;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if(isReq) {
      /* Send request to the server for authentication */
      axios.post('https://myflix-movieapp-bylisa.herokuapp.com/users', {
          Username: username,
          Password: password,
          Email: email,
          Birthday: birthday
      })
      .then(response =>{
          const data = response.data;
          console.log(data);
          alert('Registration success! Please login.');
          window.open('/', '_self');
      })
      .catch(response => {
        console.log(response);
        alert('Unable to register');
      });
    };
  }

  const gotoLoginView = (e) => {
    console.log('clicked to login instead of register');
    // Reroute to login page
    //return (
    //  <LoginView />
    //)
  };

  return (
    <div>
      <Form>
        <h3>myFlix Sign-Up</h3>
        <p />
        <Form.Group controlId="formUsername" className="reg-form-inputs">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
            {values.usernameErr && <p>{values.usernameErr}</p>}
        </Form.Group>

        <Form.Group controlId="formPassword" className="reg-form-inputs">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
          {values.passwordErr && <p>{values.passwordErr}</p>}
        </Form.Group>

        <Form.Group controlId="formEmail" className="reg-form-inputs">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
          {values.emailErr && <p>{values.emailErr}</p>}
        </Form.Group>

        <Form.Group controlId="formBirthday" className="reg-form-inputs">
          <Form.Label>Birthday:</Form.Label>
          <Form.Control type="date" name="birthday" onChange={e => setBirthday(e.target.value)} />
        </Form.Group>

        <Button variant="secondary" size="sm" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <p>Already a user?{' '}
      <Button variant="secondary" type="button" size="sm" onClick={gotoLoginView}>Login</Button></p>
    </div>
  );
}
