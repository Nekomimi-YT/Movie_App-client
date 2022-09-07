import React from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { MovieCard } from '../movie-card/movie-card';

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
  }

  if (!movies) return <div className="main-view"/>;

  return <>
  <Col md={12} style={{ margin: '1em' }}>
    <VisibilityFilterInput visibilityFilter={visibilityFilter} />
  </Col>
  {filteredMovies.map(m => (
    <Col md={6} key={m._id}>
      <MovieCard movie={m} />
    </Col>
  ))}
</>;
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      ImagePath: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      ReleaseYear: PropTypes.string.isRequired,
      CriticRating: PropTypes.string.isRequired,
      AudienceRating: PropTypes.string.isRequired,
      Genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
      }),
      Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string.isRequired,
      }),
      Actors:PropTypes.array.isRequired
    })).isRequired,
  visibilityFilter:PropTypes.string.isRequired
};

export default connect(mapStateToProps)(MoviesList);