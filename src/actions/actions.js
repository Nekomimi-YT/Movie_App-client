export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER =  'SET_FILTER';
export const CREATE_USER = 'CREATE_USER';
export const SET_USER = 'SET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DEL_USER = 'DEL_USER';
export const SET_FAVMOV = 'SET_FAVMOV';
export const DEL_FAVMOV = 'DEL_FAVMOV';


export function setMovies(value) {
  return { type: SET_MOVIES, value };
}

export function setFilter(value) {
  return { type: SET_FILTER, value };
}

export function createUser(value) {
  return { type: CREATE_USER, value };
}

export function setUser(value) {
  return { type: SET_USER, value };
}

export function updateUser(value) {
  return { type: UPDATE_USER, value };
}

export function deleteUser(value) {
  return { type: DEL_USER, value };
}

export function setFavmov(value) {
  return { type: SET_FAVMOV, value };
}

export function deleteFavmov(value) {
  return { type: DEL_FAVMOV, value };
}

