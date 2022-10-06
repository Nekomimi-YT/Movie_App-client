// movie_api-client/src/components/fav-movie-card/fav-movie-card.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import './fav-movie-card.scss';

export class FavMovieCard extends React.Component {
  render() {
    const { favMovie, deleteFavorite } = this.props;
    const username = localStorage.getItem('user');
    const movieID = favMovie._id;

    return (
      <Card className="d-flex m-1 box-shadow card-background height">
        <Card.Body className="text-center">
          <Card.Img className="mb-3 width" src={ favMovie.ImagePath } crossOrigin="anonymous"/>
          <Card.Title><h2>{ favMovie.Title }</h2></Card.Title>
          <Card.Text>{ favMovie.ReleaseYear }</Card.Text>
          <Card.Text>{ favMovie.Genre.Name }</Card.Text>
            <Button variant="secondary" size="sm" onClick={() => { deleteFavorite(username, movieID); }}>Delete</Button>
        </Card.Body>
      </Card>
    );
  }
}

FavMovieCard.propTypes = {
  favMovie: PropTypes.shape({
    ImagePath: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    ReleaseYear: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired
    })
  }).isRequired,
  deleteFavorite: PropTypes.func.isRequired
};