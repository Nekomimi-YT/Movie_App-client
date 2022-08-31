// movie_api--client/src/main-view/main-view.jsx
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { ProfileView } from '../profile-view/profile-view';
import { NavbarUserView } from '../navbar-user-view/navbar-user-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { FavoritesView } from '../favorites-view/favorites-view';
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

  onLoggedIn(authData) {
    this.setState({
      user: authData.user.Username
    });
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    localStorage.setItem('email', authData.user.Email);
    localStorage.setItem('birthday', authData.user.Birthday);
    localStorage.setItem('favorites', authData.user.favoriteMovies);
    this.getMovies(authData.token);
  }

  render() {
    const { movies, user } = this.state;

    //TODO: need to move NavbarUserView to only logged in route? and move row className?
    return (
      <Router>
        <NavbarUserView user = { user } />
          <Row className="main-view justify-content-md-center">
          <Route exact path="/" render={() => {
             if (!user) return <Col md={7}>
             <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
           </Col>
        
              if (movies.length === 0) return <div className="main-view" />;
              
              return movies.map(m => (
                <Col md={8} key={m._id}>
                  <MovieCard movie={m} />
              </Col>
              ))
            }} /> 

            <Route path="/register" render={() => {
              if (user) return <Redirect to="/" />
              return <Col md={7}>
                    <RegistrationView />
                  </Col>
            }} />
            
            <Route path="/users/:username" render={({ history }) => {
              if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
              return <Col md={8}>
                <ProfileView user = { user } onBackClick={() => history.goBack()} />
              </Col>
            }} />

            <Route path="/users/:username/favorites" render={({ history }) => {
              if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
              return <Col md={8}>
                <FavoritesView movies = { localStorage.getItem('favorites') } onBackClick={() => history.goBack()} />
              </Col>
            }} />

            <Route path="/movies/:movieId" render={({ match, history }) => {
              if (!user) return <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>
              if (movies.length === 0) return <div className="main-view" />;
              return <Col md={8}>
                <MovieView user = { user } movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
              </Col>
            }} />

            <Route path="/directors/:name" render={({ match, history }) => {
              if (!user) return <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>
              if (movies.length === 0) return <div className="main-view" />;
              return <Col md={8}>
                <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} 
                  directorList={movies.filter(m => m.Director.Name === match.params.name)} onBackClick={() => history.goBack()}/>
              </Col>
            }
            } />

            <Route path="/genres/:name" render={({ match, history }) => {
              if (!user) return <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>
              if (movies.length === 0) return <div className="main-view" />;
              return <Col md={8}>
                <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} 
                  genreList={movies.filter(m => m.Genre.Name === match.params.name)} onBackClick={() => history.goBack()}/>
              </Col>
            }
            } />
          </Row>
      </Router>
    ); 
  } 
}
