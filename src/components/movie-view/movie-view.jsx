import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Card, Button } from 'react-bootstrap';
import './movie-view.scss';

export class MovieView extends React.Component {

  addFavorite(user, movie) {
    const accessToken = localStorage.getItem('token');
    axios.post(`https://myflix-movieapp-bylisa.herokuapp.com/users/${user}/movies/${movie._id}`, 
      { 
        username: user 
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    )
    .then(response => {
      const data = response.data
      localStorage.setItem('favorites', data.favoriteMovies);
      alert('Movie has been added to your favorites!');
    })
    .catch(error => {
      console.log(error);
      alert('Ooops! Something went wrong!');
    })
  }

  render() {
    const { user, movie, onBackClick } = this.props;
    return ( 
        <Card className= "m-2 box-shadow card-background">
          <div>
            <Button variant="link" onClick={() => { onBackClick(); }}>{'<<'} Back</Button>
          </div>
          <Card.Body className="card-text-align">
          <Card.Img className="m-auto image-size" src={ movie.ImagePath } crossOrigin="anonymous"/>
          <Row className="d-flex flex-column align-items-center mt-3 mr-1 ml-1 }">
            <Card.Title>
              <h2>{ movie.Title } { movie.ReleaseYear }</h2>
              <Button variant="secondary" size="sm" className="mt-2 mb-1" onClick={() => { this.addFavorite(user, movie); }}>Me Like!</Button>
            </Card.Title>
            <Card.Text>Starring: { movie.Actors }</Card.Text>
            </Row>
            <Row className="d-flex flex-column align-items-center mt-3 mr-1 ml-1">
            <Card.Text>{ movie.Description }</Card.Text>
            <Card.Text>Critic Rating: { movie.CriticRating }</Card.Text>
            <Card.Text>Audience Rating: { movie.AudienceRating }</Card.Text>
            <Card.Text>
              Genre: <Link to={`/genres/${movie.Genre.Name}`}>
              <Button variant="link">{ movie.Genre.Name }</Button>
              </Link>
            </Card.Text>
            <Card.Text>
              Director: <Link to={`/directors/${movie.Director.Name}`}>
                <Button variant="link">{ movie.Director.Name }</Button>
              </Link>
            </Card.Text>
            </Row>
          </Card.Body>
        </Card>
    );
  }
}

MovieView.propTypes = {
  user: PropTypes.string.isRequired,
  movie: PropTypes.shape({
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
    }).isRequired,
  onBackClick: PropTypes.func.isRequired
};