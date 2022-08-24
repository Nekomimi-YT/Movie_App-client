// movie_api-client/src/components/genre-view-view/genre-view.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import './genre-view.scss';

export class GenreView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card className="d-flex align-self-stretch m-2 box-shadow">
        <Card.Body>
          <Card.Title>{ movie.Genre.Name }</Card.Title>
          <Card.Text>{ movie.Genre.Description}</Card.Text>
            <Button variant="link" className="closeCard" onClick={() => { onBackClick(); }}>Back{'<<'}</Button>
        </Card.Body>
      </Card>
    );
  }
}

GenreView.propTypes = {
  movie: PropTypes.shape({
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    })
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};