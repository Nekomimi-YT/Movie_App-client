// movie_api-client/src/components/movie-card/movie-card.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col, Button, Card } from 'react-bootstrap';
import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const shortMD = movie.Description.slice(0, 100);

    return (
      <Card className="d-flex align-self-stretch m-1 box-shadow">
        <Card.Img variant="top" style={{width: 225}} src={ movie.ImagePath } crossOrigin="anonymous"/>
        <Card.Body>
          <Card.Title><h2>{ movie.Title }</h2></Card.Title>
          <Card.Text>{ movie.ReleaseYear }</Card.Text>
          <Card.Text>{ movie.Genre.Name }</Card.Text>
          <Card.Text>{ shortMD }...</Card.Text>
          <Link to={`/movies/${movie._id}`}>
            <Button variant="link">Open {'>>'}</Button>
          </Link>
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
  }).isRequired
};