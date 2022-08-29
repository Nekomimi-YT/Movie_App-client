// movie_api-client/src/components/genre-view/genre-view.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Button, Card } from 'react-bootstrap';
import { OtherMoviesView } from '../other-movies-view/other-movies-view';
import './genre-view.scss';

export class GenreView extends React.Component {
  render() {
    const { genre, genreList, onBackClick } = this.props;
    console.log(genreList);
    return (
      <Card className="d-flex align-self-stretch m-2 box-shadow">
        <Card.Body>
          <Card.Title>{ genre.Name }</Card.Title>
          <Card.Text>{genre.Description}</Card.Text>
          <h4>All {genre.Name} movies:</h4>
          <Row className="d-flex">
            {genreList.map(movie => <OtherMoviesView obj={movie.ImagePath} key={movie._id} />)}
          </Row>
            <Button variant="link" className="closeCard" onClick={() => { onBackClick(); }}>{'<<'} Back</Button>
        </Card.Body>
      </Card>
    );
  }
}

GenreView.propTypes = {
    genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }).isRequired,
  onBackClick: PropTypes.func.isRequired
};