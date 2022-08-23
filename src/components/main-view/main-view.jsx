// movie_api--client/src/main-view/main-view.jsx
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { NavbarView } from '../navbar-view/navbar-view';
import { NavbarUserView } from '../navbar-user-view/navbar-user-view';
import './main-view.scss';


export class MainView extends React.Component {

  constructor() {
    super();
// Initial state is set to null
    this.state = {
      movies: [],
      user: null
    };
  }

componentDidMount() {
  let accessToken = localStorage.getItem('token');
  if (accessToken !== null) {
    this.setState({ 
      user: localStorage.getItem('user')
    });
    this.getMovies(accessToken);
  }
}

getMovies(token) {
  axios.get('https://myflix-movieapp-bylisa.herokuapp.com/movies', {
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(response => {
    this.setState({
      movies: response.data
    });
  })
  .catch(error => console.log(error));
}

/* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/

onLoggedIn(authData) {
  console.log(authData);
  this.setState({
    user: authData.user.Username
  });

  localStorage.setItem('token', authData.token);
  localStorage.setItem('user', authData.user.Username);
  this.getMovies(authData.token);
}

render() {
  const { movies, user } = this.state;

  /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
  if (!user) return ( 
    <div>
      <NavbarView />
      <Row>
        <Col>
          <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
        </Col>
      </Row>
    </div>
  ); 

  //if (register button is clicked) return <RegistrationView />

  
  if (movies.length === 0) return <div className="main-view" />;

  return (
    <Router>
      <div>
        <NavbarUserView />
        <Row className="main-view justify-content-md-center">
          <Route exact path="/" render={() => {
            return movie.map(m => (
              <Col md={4} key={m._id}>
                <MovieCard movie={m} />
              </Col>
            ))
          }} />
          <Route path="/movies/:movieId" render={({ match }) => {
            return <Col md={8}>
              <MovieView movie={movies.find(m => m._id === match.params.movieId)} />
            </Col>
          }} />
        </Row>
      </div>
    </Router>
  );
}}
