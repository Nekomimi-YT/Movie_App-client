// movie_api-client/src/components/movie-card/movie-card.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Button, Card } from 'react-bootstrap';
import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const shortMD = movie.Description.slice(0, 125);

    return (
      <Card className="m-2 box-shadow card-style">
        <Card.Body>
          <Row className="d-flex flex-column align-items-center">
            <Card.Img className="image-size m-3" src={ movie.ImagePath } crossOrigin="anonymous"/>
            <Card.Title><h2>{ movie.Title }</h2></Card.Title>
            <Card.Text>{ movie.ReleaseYear }</Card.Text>
            <Card.Text>{ movie.Genre.Name }</Card.Text>
          </Row>
          <Row className="d-flex flex-column m-2">
            <Card.Text>{ shortMD }...</Card.Text>
            <Link to={`/movies/${movie._id}`}>
              <Button variant="link">Open {'>>'}</Button>
            </Link>
          </Row>
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