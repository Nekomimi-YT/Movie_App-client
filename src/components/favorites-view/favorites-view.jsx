// movie_api-client/src/components/favorites-view/favorites-view.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Button, Card } from 'react-bootstrap';
import { FavMovieCard } from '../fav-movie-card/fav-movie-card';
import './favorites-view.scss';

export class FavoritesView extends React.Component {
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
              <FavMovieCard movie={movie} /></Col>)}
          </Row>
            <Button variant="link" onClick={() => { onBackClick(); }}>{'<<'} Back</Button>
        </Card.Body>
      </Card>
    );
  }
}

DirectorView.propTypes = {
    director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired
    }).isRequired,
  onBackClick: PropTypes.func.isRequired
};