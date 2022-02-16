import {getDB} from '../../utils/services/db';

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USER = 'GET_USER';
export const CREATE_USER = 'CREATE_USER';

const db = getDB();

export function getAllUsers() {
  return async dispatch => {
    try {
      db.ref('users').on('value', data => {
        const users = data.val()
          ? Object.keys(data.val()).map(key => ({...data.val()[key], id: key}))
          : [];

        dispatch({
          type: GET_ALL_USERS,
          users,
        });
      });
    } catch (err) {
      console.warn(err);
    }
  };
}

export function getUser(user) {
  return async dispatch => {
    try {
      dispatch({
        type: GET_USER,
        user,
      });
    } catch (err) {
      console.warn(err);
    }
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
