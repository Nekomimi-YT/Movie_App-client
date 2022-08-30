// movie_api-client/src/components/profile-view/profile-view.jsx

import React, { useState } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { Button, Card, Form } from 'react-bootstrap';
import './profile-view.scss';


export function ProfileView(props) {
  //const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday ] = useState('');
  const [values, setValues] = useState({
    passwordErr: '',
    emailErr: ''
  });
  const accessToken = localStorage.getItem('token');
  console.log(accessToken);

  const validate = () => {
    let isReq = true;
    const passwordRegex = /\d/i;

    if((password.length > 0) && (password.length < 6)) {
      setValues({...values, passwordErr: 'Password must be at least 6 characters long'});
      isReq = false;
    }else if((password.length > 0) && ((passwordRegex.test(password)) == false)) {
      setValues({...values, passwordErr:'Password must contain at least 1 digit'});
      isReq = false;
    }
    if((email.length > 0) && (email.indexOf("@") === -1)) {
      setValues({...values, emailErr: 'Not a valid email'});
      isReq = false;
      }
    return isReq;
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const isReq = validate();
    if(isReq) {
      /* Send PUT request to the server for authentication */
      axios.put(`https://myflix-movieapp-bylisa.herokuapp.com/users/${props.user}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
          Password: password,
          Email: email,
          Birthday: birthday
      })
      .then(response =>{
          const data = response.data;
          console.log(data);
          localStorage.setItem('email', data.user.Email);
          localStorage.setItem('birthday', data.user.Birthday);
          alert('Profile update success!');
          window.open('/', '_self');
      })
      .catch(response => {
        console.log(response);
        alert('Unable to update');
      });
    };
  }

  const profileEmail = localStorage.getItem('email');

    return (
      <Card className="d-flex align-self-stretch m-2 box-shadow">
        <Card.Body>
          <Button variant="link" className="closeCard" onClick={() => { props.onBackClick(); }}>{'<<'}Back</Button>
          <Card.Title>Update Your Profile:</Card.Title>
          <Card.Text>Update your password, email or birthday and click the button to submit changes. 
            Current profile information is shown inline.</Card.Text>
          <Form>
            <Form.Group controlId="formPassword" className="reg-form-inputs">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" value={password} placeholder="******" onChange={e => setPassword(e.target.value)} />
              {values.passwordErr && <p>{values.passwordErr}</p>}
            </Form.Group>

            <Form.Group controlId="formEmail" className="reg-form-inputs">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" value={email} placeholder={profileEmail} onChange={e => setEmail(e.target.value)} />
              {values.emailErr && <p>{values.emailErr}</p>}
            </Form.Group>

            <Form.Group controlId="formBirthday" className="reg-form-inputs">
              <Form.Label>Birthday:</Form.Label>
              <Form.Control type="date" name="birthday" onChange={e => setBirthday(e.target.value)} />
            </Form.Group>
            <Button variant="secondary" size="sm" type="submit" onClick={handleUpdate}>Submit</Button>
          </Form>
          <hr />
          <div>
            <Button variant="warning" size="sm" type="button">Unregister</Button>
            <p>Warning! Clicking this button will DELETE YOUR PROFILE!</p>
          </div>
        </Card.Body>
      </Card>
    );
  }

/*ProfileView.propTypes = {
  userProfile: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.instanceOf(Date)
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};*/