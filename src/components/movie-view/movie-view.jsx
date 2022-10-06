import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Card, Button } from 'react-bootstrap';
import './movie-view.scss';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export class MovieView extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      buttonClicked: false
    }
  }

  componentDidMount () {
    const favMovies = localStorage.getItem('favorites').split(',');
    const { movie } = this.props;
    if (favMovies.includes(movie._id)) {
      this.setState ({ buttonClicked: true });
    }
  }

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
      this.setState ({ buttonClicked: true});
    })
    .catch(error => {
      console.log(error);
      alert('Ooops! Something went wrong!');
    })
  }

  render() {
    const { user, movie, onBackClick } = this.props;
    const { buttonClicked } = this.state;
    const element = <FontAwesomeIcon icon={faHeart} />;
    return ( 
        <Card className= "m-2 box-shadow card-background">
          <div>
            <Button variant="link" onClick={() => { onBackClick(); }}>{'<<'} Back</Button>
          </div>
          <Card.Body className="text-center">
          <Card.Img className="m-auto image-size" src={ movie.ImagePath } crossOrigin="anonymous"/>
          <Row className="d-flex flex-column align-items-center mt-3 mr-1 ml-1 }">
            <Card.Title>
              <h2>{ movie.Title } { movie.ReleaseYear }</h2>
              {buttonClicked ? (
                <Button size="sm" variant="danger" className="mt-2 mb-1 liked" disabled>{element} Liked!</Button>
              ) : 
              <Button size="sm" variant="secondary" className="mt-2 mb-1" onClick={() => { this.addFavorite(user, movie); }}>{element} Like</Button>
              }
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