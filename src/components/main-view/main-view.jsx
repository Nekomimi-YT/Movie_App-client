// movie_api--client/src/main-view/main-view.jsx
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import { setMovies, setUser } from '../../actions/actions';

import MoviesList from '../movies-list/movies-list';
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { ProfileView } from '../profile-view/profile-view';
import { NavbarUserView } from '../navbar-user-view/navbar-user-view';
import { MovieView } from '../movie-view/movie-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { FavoritesView } from '../favorites-view/favorites-view';
import './main-view.scss';


export class MainView extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
     this.props.setUser({
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
      this.props.setMovies(response.data);
    })
    .catch(error => console.log(error));
  }

  onLoggedIn(authData) {
    console.log(`MainView has received: ${JSON.stringify(authData)}`);
    this.props.setUser({
        user: authData.user.Username
      });
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    localStorage.setItem('email', authData.user.Email);
    localStorage.setItem('birthday', authData.user.Birthday);
    localStorage.setItem('favorites', authData.user.favoriteMovies);
    this.props.setUser({
      user: localStorage.getItem('user')
    });
    this.getMovies(authData.token);
  }

  render() {
    let { user, movies } = this.props; 

    return (
      <Router>
        <NavbarUserView user = { user }/>
          <Row className="main-view justify-content-md-center">
          <Route exact path="/" render={() => {
             if (!user) return <Col md={7}>
             <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
           </Col>
        
              if (movies.length === 0) return <div className="main-view" />;
              
              return <MoviesList movies={movies}/>;
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

            <Route path="/myfavorites" render={({ history }) => {
              if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
              return <Col md={8}>
                <FavoritesView movies = {movies} onBackClick={() => history.goBack()} />
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

MainView.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      ImagePath: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      ReleaseYear: PropTypes.string.isRequired,
      CriticRating: PropTypes.string.isRequired,
      AudienceRating: PropTypes.string.isRequired,
      Genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
      }),
      Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string.isRequired,
      }),
      Actors:PropTypes.array.isRequired
    })).isRequired,
  user: PropTypes.string
};

let mapStateToProps = state => {
  return { 
    movies: state.movies,
    user: state.user
  };
};

export default connect(mapStateToProps, { setMovies, setUser } )(MainView);
