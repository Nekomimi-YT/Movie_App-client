// movie_api-client/src/components/fav-movie-card/fav-movie-card.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import './fav-movie-card.scss';

export class FavMovieCard extends React.Component {
  render() {
    const { movie, deleteFavorite } = this.props;
    const userName = localStorage.getItem('user');
    const movieID = movie._id;

    return (
      <Card className="d-flex align-self-stretch m-1 box-shadow">
        <Card.Img variant="top" style={{width: 200}} src={ movie.ImagePath } crossOrigin="anonymous"/>
        <Card.Body>
          <Card.Title><h2>{ movie.Title }</h2></Card.Title>
          <Card.Text>{ movie.ReleaseYear }</Card.Text>
          <Card.Text>{ movie.Genre.Name }</Card.Text>
            <Button variant="secondary" size="sm" onClick={() => { deleteFavorite(userName, movieID); }}>Delete</Button>
        </Card.Body>
      </Card>
    );
  }
}

FavMovieCard.propTypes = {
  movie: PropTypes.shape({
    ImagePath: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    ReleaseYear: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired
    })
  }).isRequired,
  deleteFavorite: PropTypes.func.isRequired
};