// src/components/visibility-filter-input/visibility-filter-input.jsx
import React from 'react';
import { connect } from 'react-redux';

import { Form } from 'react-bootstrap';

import { setFilter } from '../../actions/actions';

function VisibilityFilterInput(props) {
  return <Form.Control
    onChange={e => props.setFilter(e.target.value)}
    value={props.visibilityFilter}
    placeholder="Search"
    className="input-focus input-focus-border-color"  //https://getbootstrap.com/docs/5.1/forms/form-control/
  />;
}

export default connect(
  null,
  { setFilter }
)(VisibilityFilterInput);