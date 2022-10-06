// movie_api-client/src/components/favorites-view/favorites-view.jsx

import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Col, Row, Button, Card } from 'react-bootstrap';
import { FavMovieCard } from '../fav-movie-card/fav-movie-card';
import './favorites-view.scss';

export class FavoritesView extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      favorites: localStorage.getItem('favorites').split(',')
    }
  }

  deleteFavorite(user, movieID) {
    const accessToken = localStorage.getItem('token');
    axios.delete(`https://myflix-movieapp-bylisa.herokuapp.com/users/${user}/movies/${movieID}`, 
      {
        headers: { Authorization: `Bearer ${accessToken}` }
      }
    )
    .then(() => {
      const favMovies = localStorage.getItem('favorites').split(',');
      localStorage.setItem('favorites', favMovies.filter(item => item != movieID));
      location.reload(false);
    })
    .catch(error => {
      console.log(error);
      alert('Oops! Something went wrong!');
    })
  }

  render() {
    const { movies, onBackClick } = this.props;
    const { favorites } = this.state;

    if (favorites == '')  {
      return (
        <Card className="d-flex align-self-stretch m-2 box-shadow card-background">
          <div>
            <Button variant="link" onClick={() => { onBackClick(); }}>{'<<'} Back</Button>
          </div>
          <Card.Body>
            <Card.Title><h2>Favorites List</h2></Card.Title>
            <hr />
            <Card.Text>Oh noooes! You have no favorite movies yet!
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }

    return (
      <Card className="d-flex align-self-stretch m-2 box-shadow card-background">
        <div>
          <Button variant="link" onClick={() => { onBackClick(); }}>{'<<'} Back</Button>
        </div>
        <Card.Body>
          <Card.Title><h2>Favorites List</h2></Card.Title>
          <Card.Text>You can keep track of all your favorite movies right here!  Click the movie's delete 
            button to remove a movie from your favorites list.</Card.Text>
          <Row className="d-flex">
            {movies
            .filter(movie => favorites.includes(movie._id))
            .map(m => (
              <Col md={6} key={m._id}>
                <FavMovieCard favMovie={m} deleteFavorite={this.deleteFavorite}/>
              </Col>
              )
            )}
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

FavoritesView.propTypes = {
    movies: PropTypes.array.isRequired,
    onBackClick: PropTypes.func.isRequired
}; 