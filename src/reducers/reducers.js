import { combineReducers } from 'redux';

import { SET_FILTER, SET_MOVIES, CREATE_USER, SET_USER, UPDATE_USER, DEL_USER, SET_FAVMOV, DEL_FAVMOV } from '../actions/actions';

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

function userStates(state = {}, action) {
  switch (action.type) {
    case CREATE_USER:
      return action.value;
    case SET_USER:
      return action.value;
    case UPDATE_USER:
      return action.value;
    case DEL_USER:
      return action.value;
    default:
      return state;
  }
}

function manageFavorites(state =[], action) { 
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
  userStates,
  manageFavorites
});

export default moviesApp;