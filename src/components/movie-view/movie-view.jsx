import React from 'react';
import { Card, Button, Accordion } from 'react-bootstrap';
import './movie-view.scss';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return ( 
        <Card className= "m-2 box-shadow" style={{ width: '100%' }}>
          <Card.Img variant="top" src={movie.ImagePath} />
          <Card.Body>
            <Card.Title>{movie.Title} {movie.ReleaseYear}</Card.Title>
            <Card.Text>Starring: {movie.Actors}</Card.Text>
            <Card.Text>{movie.Description}</Card.Text>
            <Card.Text>Critic Rating: {movie.CriticRating}</Card.Text>
            <Card.Text>Audience Rating: {movie.AudienceRating}</Card.Text>
            <div>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Genre: {movie.Genre.Name}</Accordion.Header>
                  <Accordion.Body>{movie.Genre.Description}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Director: {movie.Director.Name}</Accordion.Header>
                  <Accordion.Body>{movie.Director.Bio}</Accordion.Body>
              </Accordion.Item>  
            </Accordion>
            </div>
            <Button variant="link" className="closeCard" onClick={() => { onBackClick(null); }}>{'<<'}Back</Button>
          </Card.Body>
        </Card>
    );
  }
}