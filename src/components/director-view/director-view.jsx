// movie_api-client/src/components/director-view/director-view.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import './director-view.scss';

export class DirectorView extends React.Component {
  render() {
    const { director, onBackClick } = this.props;

    return (
      <Card className="d-flex align-self-stretch m-2 box-shadow">
        {/*<Card.Img variant="top" src={ movie.ImagePath } crossOrigin="anonymous"/> POSSIBLE PHOTO ADD HERE*/}
        <Card.Body>
          <Card.Title>{ director.Name }</Card.Title>
          <Card.Text>{ director.Bio }</Card.Text>
            <Button variant="link" className="closeCard" onClick={() => { onBackClick(); }}>{'<<'}Back</Button>
        </Card.Body>
      </Card>
    );
  }
}

DirectorView.propTypes = {
  movie: PropTypes.shape({
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired
    })
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};