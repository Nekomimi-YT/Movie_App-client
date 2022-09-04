// movie_api-client/src/components/director-view/director-view.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Button, Card } from 'react-bootstrap';
import { OtherMoviesView } from '../other-movies-view/other-movies-view';
import './director-view.scss';

export class DirectorView extends React.Component {
  render() {
    const { director, directorList, onBackClick } = this.props;
    console.log(directorList);
    return (
      <Card className="d-flex align-self-stretch m-2 box-shadow">
        {/*<Card.Img variant="top" src={ movie.ImagePath } crossOrigin="anonymous"/> POSSIBLE PHOTO ADD HERE*/}
        <div>
          <Button variant="link" onClick={() => { onBackClick(); }}>{'<<'} Back</Button>
        </div>
        <Card.Body>
          <Card.Title><h2>{ director.Name }</h2></Card.Title>
          <Card.Text>{ director.Bio }</Card.Text>
          <h2>{director.Name}'s movies:</h2>
          <Row className="d-flex">
            {directorList.map(movie => <OtherMoviesView obj={movie.ImagePath} key={movie._id} />)}
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

DirectorView.propTypes = {
    director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired
    }).isRequired,
  onBackClick: PropTypes.func.isRequired
};