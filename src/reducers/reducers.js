import { combineReducers } from 'redux';

import 
  { 
    SET_FILTER, 
    SET_MOVIES, 
    SET_USER, 
    SET_FAVMOV, 
    DEL_FAVMOV 
  } from '../actions/actions';

function visibilityFilter(state = '', action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
}

function movies(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.value;
    default: 
      return state;
  }
}

function userState(state = '', action) {
  switch (action.type) {
    case SET_USER:
      return action.value || localStorage.getItem('user');
    default:
      return state;
  }
}

function manageFavorites(state = '', action) { 
  switch (action.type) {
    case SET_FAVMOV:
      return action.value;
    case DEL_FAVMOV:
      return action.value;
    default:
      return state;
  }
}

const moviesApp = combineReducers({
  visibilityFilter,
  movies,
  userState,
  manageFavorites
});

export default moviesApp;