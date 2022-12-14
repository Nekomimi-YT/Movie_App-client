// movie_api-client/src/components/profile-view/profile-view.jsx

import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Button, Card, Form } from 'react-bootstrap';
import './profile-view.scss';

export function ProfileView(props) {
  const accessToken = localStorage.getItem('token');
  const profileEmail = localStorage.getItem('email');
  const profileBirthday = new Date(localStorage.getItem('birthday')).toString().substring(4, 15);

  const [ password, setPassword ] = useState('');
  let [ email, setEmail ] = useState('');
  let [ birthday, setBirthday ] = useState('');
  
  const [values, setValues] = useState({
    passwordErr: '',
    emailErr: ''
  });
  
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
      if(!birthday) {
        birthday = localStorage.getItem('birthday');
      }
      if(!email) {
        email = localStorage.getItem('email');
      }
      axios.put(`https://myflix-movieapp-bylisa.herokuapp.com/users/${props.user}`, 
      {
        Username: props.user,
        Password: password,
        Email: email,
        Birthday: birthday,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    )
      .then(response => {
          const data = response.data;
          console.log(data);
          localStorage.setItem('email', data.Email);
          localStorage.setItem('birthday', data.Birthday);
          console.log (email, birthday);
          alert(`Profile update success!`);
            location.reload(false); 
      })
      .catch(response => {
        console.log(response);
        console.log(accessToken);
        alert('Unable to update');
      });
    };
  }

const handleUnregister = (e) => {
  e.preventDefault();
  axios.delete(`https://myflix-movieapp-bylisa.herokuapp.com/users/${props.user}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(response =>{
          const data = response.data;
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          localStorage.removeItem('email');
          localStorage.removeItem('birthday');
          localStorage.removeItem('favorites');
          alert('Profile deleted!');
          user = null;
          window.open('/', '_self');
      })
      .catch(response => {
        console.log(response);
        alert('Error: Account not deleted.');
      });
    };

    return (
      <Card className="d-flex align-self-stretch m-2 box-shadow card-background">
        <div>
          <Button variant="link" onClick={() => { props.onBackClick(); }}>{'<< '}Back</Button>
        </div>
        <Card.Body>
          <Card.Title><h2>Update Your Profile:</h2></Card.Title>
          <Card.Text>Update your password, email and birthday and click the button to submit changes. 
            Current profile information is above the input boxes.
          </Card.Text>
          <hr />
          <Form>
            <Form.Group controlId="formPassword" className="reg-form-inputs">
              <Form.Label>Current Password: *hidden*</Form.Label>
              <Form.Control className="input-font input-background input-margin" type="password" value={password} placeholder="update?" 
                onChange={e => setPassword(e.target.value)} />
                {values.passwordErr && <p>{values.passwordErr}</p>}
            </Form.Group>

            <Form.Group controlId="formEmail" className="reg-form-inputs">
              <Form.Label>Current Email: {profileEmail}</Form.Label>
              <Form.Control className="input-font input-background input-margin" type="email" value={email} placeholder="update?" 
                onChange={e => setEmail(e.target.value)} />
                {values.emailErr && <p>{values.emailErr}</p>}
            </Form.Group>

            <Form.Group controlId="formBirthday" className="reg-form-inputs">
              <Form.Label>Current Birthday: {profileBirthday}</Form.Label>
              <Form.Control className="input-font input-background input-margin" type="date" name="birthday" onChange={e => setBirthday(e.target.value)} />
            </Form.Group>
            <Button variant="secondary" size="sm" type="submit" onClick={handleUpdate}>Submit</Button>
          </Form>
          <hr />
          <hr />
          <div>
            <Button variant="warning" size="sm" type="button" onClick={handleUnregister}>Delete</Button>
            <p>WARNING! Clicking this button will DELETE YOUR PROFILE!</p>
          </div>
        </Card.Body>
      </Card>
    );
  }

ProfileView.propTypes = {
  user: PropTypes.string.isRequired,
  onBackClick: PropTypes.func.isRequired
};