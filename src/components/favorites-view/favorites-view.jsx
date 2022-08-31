// movie_api-client/src/components/favorites-view/favorites-view.jsx

import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Row, Button, Card } from 'react-bootstrap';
import { FavMovieCard } from '../fav-movie-card/fav-movie-card';
import './favorites-view.scss';

export class FavoritesView extends React.Component {

  deleteFavorite(user, movieID) {
    const accessToken = localStorage.getItem('token');
    console.log(accessToken); 
    console.log(movieID); 
    axios.delete(`https://myflix-movieapp-bylisa.herokuapp.com/users/${user}/movies/${movieID}`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then(response => {
      this.setState({
        userData: response.data
      });
      console.log(userData);
      localStorage.setItem('favorites', userData.favoriteMovies);
    })
    .catch(error => console.log(error));
  }

  render() {
    const { movies, onBackClick } = this.props;
    console.log(movies);
    return (
      <Card className="d-flex align-self-stretch m-2 box-shadow">
        <Card.Body>
          <Card.Title><h2>Favorite List</h2></Card.Title>
          <Card.Text>You can keep track of all your favorite movies right here!  Click the movie's delete 
            button to remove a movie from your favorite's list.</Card.Text>
          <Row className="d-flex">
            {movies.map(movie => <Col md={3} key={movie._id}>
              <FavMovieCard movie={movie} deleteFavorite={() => this.deleteFavorite()}/></Col>)}
          </Row>
            <Button variant="link" onClick={() => { onBackClick(); }}>{'<<'} Back</Button>
        </Card.Body>
      </Card>
    );
  }
}

FavoritesView.propTypes = {
    movies: PropTypes.array.isRequired,
    onBackClick: PropTypes.func.isRequired
};