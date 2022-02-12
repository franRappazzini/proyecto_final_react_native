import {getDB} from '../../utils/services/db';

export const GET_USER = 'GET_USER';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const CREATE_USER = 'CREATE_USER';

const db = getDB();

export function getAllUsers() {
  return async dispatch => {
    db.ref('users').on('value', data => {
      const users = data.val()
        ? Object.keys(data.val()).map(key => ({...data.val()[key], id: key}))
        : [];

      dispatch({
        type: GET_ALL_USERS,
        users,
      });
    });
  };
}

export function getUser(user) {
  return {
    type: GET_USER,
    user,
  };
}

export function newUser(nombre, apellido, email, username, password) {
  return async dispatch => {
    db.ref('users').push({
      nombre,
      apellido,
      email,
      username,
      password,
    });

    dispatch({type: CREATE_USER});
  };
}
