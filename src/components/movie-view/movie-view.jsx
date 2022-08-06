import React from 'react';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return ( 
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-release-year">
          <span className="label">Release Year: </span>
          <span className="value">{movie.ReleaseYear}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <div className="movie-critic-rating">
          <span className="label">Critic Rating: </span>
          <span className="value">{movie.CriticRating}</span>
        </div>
        <div className="movie-audience-rating">
          <span className="label">Audience Rating: </span>
          <span className="value">{movie.AudienceRating}</span>
        </div>
        <div className="movie-genre">
          <span className="label">Genre: </span>
          <span className="value">{JSON.stringify(movie.Genre)}</span>
        </div>
        <div className="movie-director">
          <span className="label">Director: </span>
          <span className="value">{JSON.stringify(movie.Director)}</span>
        </div>
        <div className="movie-actors">
          <span className="label">Actors: </span>
          <span className="value">{JSON.stringify(movie.Actors)}</span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>
      </div>
    );
  }
}