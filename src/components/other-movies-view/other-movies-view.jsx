// movie_api-client/src/components/other-movies-view/other-movies-view.jsx

import React from 'react';
//import PropTypes from 'prop-types';
import { Col, Row, Card } from 'react-bootstrap';
import './other-movies-view.scss';

export class OtherMoviesView extends React.Component {
  render() {
    const { obj } = this.props;

    return <Col md={4}>
      <Card className="align-self-stretch m-2 box-shadow">
        <Card.Img variant="top" src={ obj } crossOrigin="anonymous"/>
      </Card>
    </Col>
  }
}