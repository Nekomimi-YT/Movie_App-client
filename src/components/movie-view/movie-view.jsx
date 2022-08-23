import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './movie-view.scss';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return ( 
        <Card className= "m-2 box-shadow" style={{ width: '100%' }}>
          <Card.Img variant="top" src={ movie.ImagePath } crossOrigin="anonymous"/>
          <Card.Body>
            <Card.Title>{ movie.Title } { movie.ReleaseYear }</Card.Title>
            <Card.Text>Starring: { movie.Actors }</Card.Text>
            <Card.Text>{ movie.Description }</Card.Text>
            <Card.Text>Critic Rating: { movie.CriticRating }</Card.Text>
            <Card.Text>Audience Rating: { movie.AudienceRating }</Card.Text>
            <Card.Text>
              Genre: <Link to={`/genres/${ movie.Genre.Name }`}>
              <Button variant="link">{ movie.Genre.Name }</Button>
              </Link>
            </Card.Text>
            <Card.Text>
              Director: <Link to={`/directors/${ movie.Director.Name }`}>
                <Button variant="link">{ movie.Director.Name }</Button>
              </Link>
            </Card.Text>
            <Button variant="link" className="closeCard" onClick={() => { onBackClick(); }}>{'<<'}Back</Button>
          </Card.Body>
        </Card>
    );
  }
}