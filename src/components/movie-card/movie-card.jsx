// movie_api-client/src/components/movie-card/movie-card.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;
    const shortMD = movie.Description.slice(0, 100);

    return (
      <Card className="d-flex align-self-stretch m-2 box-shadow">
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.ReleaseYear}</Card.Text>
          <Card.Text>{movie.Genre.Name}</Card.Text>
          <Card.Text>{shortMD}...</Card.Text>
          <Button onClick={() => onMovieClick(movie)} variant="link" className="openCard">Open{'>>'}</Button>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    ImagePath: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    ReleaseYear: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired
    })
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};