import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './movie-view.scss';

export class MovieView extends React.Component {

  addToFavorites(user, movie) {
    const accessToken = localStorage.getItem('token');
    console.log(accessToken);
    console.log(movie._id);
    axios.post(`https://myflix-movieapp-bylisa.herokuapp.com/users/${user}/movies/${movie._id}`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then(response => {
      this.setState({
        userData: response.data
      });
      console.log(userData);
      localStorage.setItem('favorites', userData.favoriteMovies);
    })
    .catch(error => console.log(error));
  }

  render() {
    const { user, movie, onBackClick } = this.props;
    return ( 
        <Card className= "m-2 box-shadow">
          <Card.Img variant="top" src={ movie.ImagePath } style={{width: 270}} crossOrigin="anonymous"/>
          <Card.Body>
            <Card.Title>
              <h2>{ movie.Title } { movie.ReleaseYear }</h2>
              <Button variant="secondary" size="sm" onClick={() => { this.addToFavorites(user, movie); }}>Me Like!</Button>
            </Card.Title>
            <Card.Text>Starring: { movie.Actors }</Card.Text>
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
            <Button variant="link" onClick={() => { onBackClick(); }}>{'<<'} Back</Button>
          </Card.Body>
        </Card>
    );
  }
}