// movie_api-client/src/components/favorites-view/favorites-view.jsx

import React from 'react';
import axios from 'axios';
//import PropTypes from 'prop-types';
import { Col, Row, Button, Card } from 'react-bootstrap';
import { FavMovieCard } from '../fav-movie-card/fav-movie-card';
import './favorites-view.scss';

export class FavoritesView extends React.Component {

  deleteFavorite(user, movieID) {
    const accessToken = localStorage.getItem('token');
    console.log(accessToken); 
    console.log(movieID); 
    axios.delete(`https://myflix-movieapp-bylisa.herokuapp.com/users/${user}/movies/${movieID}`, {
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
    const { movies, onBackClick } = this.props;
    const favMovies = localStorage.getItem('favorites').split(',');
    console.log(favMovies);
    console.log(movies.filter(movie => favMovies.includes(movie._id)));

    if (!favMovies) {
      return (
        <Card className="d-flex align-self-stretch m-2 box-shadow">
          <Card.Body>
          <Card.Title><h2>Favorites List</h2></Card.Title>
          <hr />
          <Card.Text><p>Oh noooes! You have no favorite movies yet!</p>
          </Card.Text>
          <Button variant="link" onClick={() => { onBackClick(); }}>{'<<'} Back</Button>
        </Card.Body>
      </Card>
      );
    }

    return (
      <Card className="d-flex align-self-stretch m-2 box-shadow">
        <Card.Body>
          <Card.Title><h2>Favorites List</h2></Card.Title>
          <Card.Text>You can keep track of all your favorite movies right here!  Click the movie's delete 
            button to remove a movie from your favorite's list.</Card.Text>
          <Row className="d-flex">
            {movies
            .filter(movie => favMovies.includes(movie._id))
            .map(m => (
              <Col md={3} key={m._id}>
                <FavMovieCard favMovie={m} deleteFavorite={() => this.deleteFavorite()}/>
              </Col>
              )
            )};
          </Row>
            <Button variant="link" onClick={() => { onBackClick(); }}>{'<<'} Back</Button>
        </Card.Body>
      </Card>
    );
  }
}

/*FavoritesView.propTypes = {
    movies: PropTypes.array.isRequired,
    onBackClick: PropTypes.func.isRequired
}; */